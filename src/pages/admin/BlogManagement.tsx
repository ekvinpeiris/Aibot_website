
import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, MoreHorizontal, PlusCircle, Edit, Trash2, Eye } from "lucide-react";
import { toast } from "sonner";

type Post = {
  id: number;
  title: string;
  category: string;
  author: string;
  status: "Published" | "Draft" | "Scheduled";
  date: string;
  readTime: string;
};

const initialPosts: Post[] = [
  {
    id: 1,
    title: "7 Ways AI Chatbots Are Transforming Customer Service",
    category: "Customer Service",
    author: "Jennifer Wong",
    status: "Published",
    date: "2025-05-01",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "The Complete Guide to Training Your AI Chatbot",
    category: "AI Training",
    author: "Michael Chen",
    status: "Published",
    date: "2025-04-22",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Measuring Chatbot ROI: Key Metrics & Frameworks",
    category: "Analytics",
    author: "Sarah Johnson",
    status: "Published",
    date: "2025-04-15",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "How to Choose the Right Chatbot Platform for Your Business",
    category: "Technology",
    author: "David Martinez",
    status: "Draft",
    date: "2025-04-08",
    readTime: "11 min read",
  },
  {
    id: 5,
    title: "Conversational AI: Beyond Simple Chatbots",
    category: "Artificial Intelligence",
    author: "Lisa Parker",
    status: "Scheduled",
    date: "2025-06-01",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Integrating Your Chatbot with CRM Systems",
    category: "Integration",
    author: "Robert Wilson",
    status: "Draft",
    date: "2025-03-25",
    readTime: "7 min read",
  },
];

const BlogManagement = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<Post | null>(null);

  // Handle searching
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query) {
      const filtered = posts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  };

  // Handle post deletion
  const handleDeletePost = (post: Post) => {
    setPostToDelete(post);
    setDeleteDialogOpen(true);
  };

  const confirmDeletePost = () => {
    if (postToDelete) {
      const updatedPosts = posts.filter(post => post.id !== postToDelete.id);
      setPosts(updatedPosts);
      setFilteredPosts(updatedPosts);
      toast.success("Post deleted successfully");
      setDeleteDialogOpen(false);
    }
  };

  // Handle post status change
  const updatePostStatus = (id: number, newStatus: Post["status"]) => {
    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, status: newStatus } : post
    );
    
    setPosts(updatedPosts);
    setFilteredPosts(updatedPosts.filter(post => 
      post.title.toLowerCase().includes(searchQuery) ||
      post.author.toLowerCase().includes(searchQuery) ||
      post.category.toLowerCase().includes(searchQuery)
    ));
    
    toast.success(`Post status updated to ${newStatus}`);
  };

  const getStatusColor = (status: Post["status"]) => {
    switch (status) {
      case "Published": return "bg-green-100 text-green-800";
      case "Draft": return "bg-yellow-100 text-yellow-800";
      case "Scheduled": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminLayout title="Blog Management">
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={handleSearch}
            className="pl-9"
          />
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <PlusCircle className="h-4 w-4 mr-2" />
          New Post
        </Button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[400px]">Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Read Time</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell className="font-medium">{post.title}</TableCell>
                    <TableCell>{post.category}</TableCell>
                    <TableCell>{post.author}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(post.status)}>
                        {post.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(post.date).toLocaleDateString()}</TableCell>
                    <TableCell>{post.readTime}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="cursor-pointer">
                            <Eye className="mr-2 h-4 w-4" />
                            <span>View</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Edit className="mr-2 h-4 w-4" />
                            <span>Edit</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleDeletePost(post)} 
                            className="cursor-pointer text-red-600 focus:text-red-600"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-10">
                    <p className="text-muted-foreground">No blog posts found matching your criteria</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setSearchQuery("");
                        setFilteredPosts(posts);
                      }}
                    >
                      Reset Search
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Post</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete the post "{postToDelete?.title}"? This action cannot be undone.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDeletePost}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default BlogManagement;
