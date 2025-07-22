import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { Settings, Loader2 } from 'lucide-react';

interface InstagramScraperProps {
  onImagesScraped: (images: string[]) => void;
}

export const InstagramScraper = ({ onImagesScraped }: InstagramScraperProps) => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState(FirecrawlService.getApiKey() || '');
  const [isLoading, setIsLoading] = useState(false);
  const [showApiKeyInput, setShowApiKeyInput] = useState(!FirecrawlService.getApiKey());

  const handleSaveApiKey = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter your Firecrawl API key",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    const isValid = await FirecrawlService.testApiKey(apiKey);
    
    if (isValid) {
      FirecrawlService.saveApiKey(apiKey);
      setShowApiKeyInput(false);
      toast({
        title: "Success",
        description: "API key saved successfully",
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid API key. Please check and try again.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const handleScrapeInstagram = async () => {
    setIsLoading(true);
    
    try {
      const result = await FirecrawlService.scrapeInstagram('victoriaon5th');
      
      if (result.success && result.data) {
        onImagesScraped(result.data);
        toast({
          title: "Success",
          description: `Found ${result.data.length} Instagram images`,
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to scrape Instagram posts",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error scraping Instagram:', error);
      toast({
        title: "Error",
        description: "Failed to scrape Instagram posts",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (showApiKeyInput) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Setup Instagram Scraping
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            To scrape Instagram posts, you need a Firecrawl API key. Get one free at{' '}
            <a 
              href="https://firecrawl.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              firecrawl.dev
            </a>
          </p>
          <div className="space-y-2">
            <Input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your Firecrawl API key"
            />
            <Button 
              onClick={handleSaveApiKey} 
              disabled={isLoading}
              className="w-full"
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save API Key
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="mb-6">
      <div className="flex gap-2 mb-4">
        <Button 
          onClick={handleScrapeInstagram} 
          disabled={isLoading}
          className="bg-gold hover:bg-gold/90"
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Refresh Instagram Posts
        </Button>
        <Button 
          variant="outline" 
          onClick={() => setShowApiKeyInput(true)}
          size="icon"
        >
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};