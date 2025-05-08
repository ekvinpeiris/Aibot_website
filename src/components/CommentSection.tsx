
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  avatar?: string;
}

// Demo comments
const DEMO_COMMENTS: Comment[] = [
  {
    id: "1",
    author: "John Smith",
    content: "This is a great article! I've learned so much about AI chatbots.",
    date: "May 5, 2025",
    avatar: "/placeholder.svg"
  },
  {
    id: "2",
    author: "Sarah Johnson",
    content: "I've been looking for a comparison of chatbot platforms. This really helped me make a decision for my business.",
    date: "May 3, 2025",
    avatar: "/placeholder.svg"
  }
];

interface CommentSectionProps {
  postId: string | number;
}

const CommentSection = ({ postId }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>(DEMO_COMMENTS);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim()) {
      toast({
        title: "Error",
        description: "Please enter a comment",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real app, you'd send this to your API
    setTimeout(() => {
      const comment: Comment = {
        id: Date.now().toString(),
        author: "Current User",
        content: newComment,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        avatar: "/placeholder.svg"
      };
      
      setComments([...comments, comment]);
      setNewComment("");
      setIsSubmitting(false);
      
      toast({
        title: "Success",
        description: "Your comment has been posted",
      });
    }, 500);
  };

  return (
    <section className="mt-16 border-t pt-8">
      <h2 className="text-2xl font-semibold mb-6">Comments ({comments.length})</h2>
      
      <div className="space-y-6 mb-8">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={comment.avatar} alt={comment.author} />
              <AvatarFallback>{comment.author.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">{comment.author}</h4>
                <span className="text-sm text-muted-foreground">{comment.date}</span>
              </div>
              <p className="mt-1 text-muted-foreground">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit}>
        <h3 className="text-lg font-medium mb-2">Leave a comment</h3>
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
          className="mb-3"
          rows={4}
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Posting..." : "Post Comment"}
        </Button>
      </form>
    </section>
  );
};

export default CommentSection;
