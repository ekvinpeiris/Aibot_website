
import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ShareButtonsProps {
  title: string;
  url: string;
  description?: string;
}

const ShareButtons = ({ title, url, description = "" }: ShareButtonsProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      "_blank"
    );
  };

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      "_blank"
    );
  };

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
      "_blank"
    );
  };

  const shareToClipboard = () => {
    navigator.clipboard.writeText(url).then(
      () => {
        toast.success("Link copied to clipboard!");
      },
      (err) => {
        toast.error("Could not copy link to clipboard");
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Share:</span>
      <div className="flex space-x-1">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={shareToFacebook}
          aria-label="Share to Facebook"
        >
          <Facebook className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={shareToTwitter}
          aria-label="Share to Twitter"
        >
          <Twitter className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={shareToLinkedIn}
          aria-label="Share to LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={shareToClipboard}
          aria-label="Copy link to clipboard"
        >
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ShareButtons;
