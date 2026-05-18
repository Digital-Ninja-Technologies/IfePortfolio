import { useState } from "react";
import { Link as LinkIcon, Check, Linkedin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ShareButtonsProps {
  title: string;
  url: string;
}

const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({ title: "Link copied", description: "Share it anywhere you like." });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Couldn't copy", description: "Please copy the URL manually.", variant: "destructive" });
    }
  };

  const btn =
    "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-colors";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm text-muted-foreground mr-1">Share:</span>
      <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on X" className={btn}>
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.91l-4.81-6.29L5.7 22H2.44l8.02-9.17L1.5 2h7.08l4.35 5.76L18.244 2Zm-2.42 18h1.9L7.27 4H5.24l10.584 16Z" />
        </svg>
        X
      </a>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className={btn}>
        <Linkedin className="w-4 h-4" />
        LinkedIn
      </a>
      <button onClick={handleCopy} aria-label="Copy link" className={btn}>
        {copied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
};

export default ShareButtons;
