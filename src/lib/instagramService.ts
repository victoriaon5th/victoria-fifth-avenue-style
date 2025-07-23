import { igdl } from 'btch-downloader';

export interface InstagramPostData {
  url: string;
  thumbnailUrl?: string;
  downloaded?: boolean;
}

export class InstagramService {
  private static downloadedImages = new Map<string, string>();

  static async getPostThumbnail(postUrl: string): Promise<string | null> {
    try {
      // Check if already downloaded
      if (this.downloadedImages.has(postUrl)) {
        return this.downloadedImages.get(postUrl)!;
      }

      // Use igdl to get Instagram post data
      const result = await igdl(postUrl);
      console.log('Instagram API result:', result);
      
      // Try different possible response structures
      if (result) {
        let thumbnailUrl: string | null = null;
        
        // Check various possible response formats
        if ((result as any).url && Array.isArray((result as any).url)) {
          thumbnailUrl = (result as any).url[0];
        } else if ((result as any).data && Array.isArray((result as any).data)) {
          thumbnailUrl = (result as any).data[0]?.url || (result as any).data[0];
        } else if (Array.isArray(result)) {
          thumbnailUrl = result[0]?.url || result[0];
        } else if (typeof result === 'string') {
          thumbnailUrl = result;
        }
        
        if (thumbnailUrl) {
          this.downloadedImages.set(postUrl, thumbnailUrl);
          return thumbnailUrl;
        }
      }
      
      return null;
    } catch (error) {
      console.error('Error downloading Instagram post:', error);
      return null;
    }
  }

  static async downloadMultiplePosts(urls: string[]): Promise<Map<string, string>> {
    const promises = urls.map(async (url) => {
      const thumbnail = await this.getPostThumbnail(url);
      return { url, thumbnail };
    });

    const results = await Promise.all(promises);
    const thumbnailMap = new Map<string, string>();

    results.forEach(({ url, thumbnail }) => {
      if (thumbnail) {
        thumbnailMap.set(url, thumbnail);
      }
    });

    return thumbnailMap;
  }
}