import FirecrawlApp from '@mendable/firecrawl-js';

interface ErrorResponse {
  success: false;
  error: string;
}

interface ScrapeResponse {
  success: true;
  data: {
    markdown: string;
    html: string;
    metadata: {
      title: string;
      description: string;
      language: string;
      sourceURL: string;
    };
  };
}

type InstagramScrapeResponse = ScrapeResponse | ErrorResponse;

export class FirecrawlService {
  private static API_KEY_STORAGE_KEY = 'firecrawl_api_key';
  private static firecrawlApp: FirecrawlApp | null = null;

  static saveApiKey(apiKey: string): void {
    localStorage.setItem(this.API_KEY_STORAGE_KEY, apiKey);
    this.firecrawlApp = new FirecrawlApp({ apiKey });
    console.log('API key saved successfully');
  }

  static getApiKey(): string | null {
    return localStorage.getItem(this.API_KEY_STORAGE_KEY);
  }

  static async testApiKey(apiKey: string): Promise<boolean> {
    try {
      console.log('Testing API key with Firecrawl API');
      this.firecrawlApp = new FirecrawlApp({ apiKey });
      // A simple test scrape to verify the API key
      const testResponse = await this.firecrawlApp.scrapeUrl('https://example.com');
      return testResponse.success;
    } catch (error) {
      console.error('Error testing API key:', error);
      return false;
    }
  }

  static async scrapeInstagram(username: string): Promise<{ success: boolean; error?: string; data?: any }> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      return { success: false, error: 'API key not found' };
    }

    try {
      console.log('Making scrape request to Instagram profile');
      if (!this.firecrawlApp) {
        this.firecrawlApp = new FirecrawlApp({ apiKey });
      }

      const instagramUrl = `https://www.instagram.com/${username}/`;
      const scrapeResponse = await this.firecrawlApp.scrapeUrl(instagramUrl, {
        formats: ['html'],
        waitFor: 2000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      }) as InstagramScrapeResponse;

      if (!scrapeResponse.success) {
        console.error('Scrape failed:', (scrapeResponse as ErrorResponse).error);
        return { 
          success: false, 
          error: (scrapeResponse as ErrorResponse).error || 'Failed to scrape Instagram profile' 
        };
      }

      // Extract image URLs from the HTML
      const html = scrapeResponse.data.html;
      const imageUrls = this.extractInstagramImages(html);

      console.log('Scrape successful, found images:', imageUrls.length);
      return { 
        success: true,
        data: imageUrls
      };
    } catch (error) {
      console.error('Error during Instagram scrape:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to scrape Instagram profile' 
      };
    }
  }

  private static extractInstagramImages(html: string): string[] {
    const imageUrls: string[] = [];
    
    // Look for Instagram image patterns in the HTML
    const imgRegex = /<img[^>]+src="([^"]*)"[^>]*>/g;
    let match;
    
    while ((match = imgRegex.exec(html)) !== null) {
      const url = match[1];
      // Filter for Instagram CDN images
      if (url.includes('cdninstagram.com') || url.includes('fbcdn.net')) {
        imageUrls.push(url);
      }
    }
    
    // Also look for data-src attributes
    const dataSrcRegex = /<img[^>]+data-src="([^"]*)"[^>]*>/g;
    while ((match = dataSrcRegex.exec(html)) !== null) {
      const url = match[1];
      if (url.includes('cdninstagram.com') || url.includes('fbcdn.net')) {
        imageUrls.push(url);
      }
    }
    
    // Remove duplicates and return first 12 images
    return [...new Set(imageUrls)].slice(0, 12);
  }
}