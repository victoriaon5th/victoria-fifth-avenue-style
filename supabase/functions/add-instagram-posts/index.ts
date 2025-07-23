import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

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

// Extract post ID from Instagram URL
function extractPostId(url: string): string {
  const match = url.match(/\/p\/([A-Za-z0-9_-]+)/);
  return match ? match[1] : url;
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

    const { postUrls } = await req.json()
    
    if (!postUrls || !Array.isArray(postUrls)) {
      return new Response(
        JSON.stringify({ error: 'Instagram post URLs array is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    console.log(`Processing ${postUrls.length} Instagram post URLs`)

    // Process and store posts in database
    const instagramPosts = []
    
    for (const url of postUrls) {
      try {
        const postId = extractPostId(url)
        const postData = {
          post_id: postId,
          post_url: url,
          image_url: null, // Will be handled by Instagram embed
          caption: null,
          timestamp: new Date().toISOString(),
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
        console.error('Error processing post URL:', postError)
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
    console.error('Error in add-instagram-posts function:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to add Instagram posts',
        details: error.message 
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})