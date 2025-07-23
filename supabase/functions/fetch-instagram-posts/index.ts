import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { InstagramScraper } from 'https://esm.sh/@aduptive/instagram-scraper@1.0.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface Database {
  public: {
    Tables: {
      instagram_posts: {
        Row: {
          id: string
          post_id: string
          post_url: string
          image_url: string | null
          caption: string | null
          timestamp: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          post_id: string
          post_url: string
          image_url?: string | null
          caption?: string | null
          timestamp?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          post_id?: string
          post_url?: string
          image_url?: string | null
          caption?: string | null
          timestamp?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient<Database>(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    const { username } = await req.json()
    
    if (!username) {
      return new Response(
        JSON.stringify({ error: 'Instagram username is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    console.log(`Fetching Instagram posts for username: ${username}`)

    // Create Instagram scraper instance
    const scraper = new InstagramScraper()
    
    // Fetch the latest posts
    const posts = await scraper.getUserPosts(username, 8) // Get latest 8 posts
    
    console.log(`Fetched ${posts.length} posts from Instagram`)

    // Process and store posts in database
    const instagramPosts = []
    
    for (const post of posts) {
      try {
        const postData = {
          post_id: post.shortcode || post.id,
          post_url: `https://www.instagram.com/p/${post.shortcode || post.id}/`,
          image_url: post.display_url || post.thumbnail_src,
          caption: post.edge_media_to_caption?.edges?.[0]?.node?.text || null,
          timestamp: post.taken_at_timestamp ? new Date(post.taken_at_timestamp * 1000).toISOString() : null,
        }

        // Insert or update the post
        const { error } = await supabaseClient
          .from('instagram_posts')
          .upsert(postData, { 
            onConflict: 'post_id',
            ignoreDuplicates: false 
          })

        if (error) {
          console.error('Error inserting post:', error)
        } else {
          instagramPosts.push(postData)
        }
      } catch (postError) {
        console.error('Error processing post:', postError)
      }
    }

    console.log(`Successfully processed ${instagramPosts.length} Instagram posts`)

    return new Response(
      JSON.stringify({ 
        success: true, 
        processed: instagramPosts.length,
        posts: instagramPosts
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error in fetch-instagram-posts function:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch Instagram posts',
        details: error.message 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})