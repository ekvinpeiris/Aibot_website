
import Fuse from 'fuse.js';
import type { BlogPost } from './types';

// Configure Fuse.js options
const fuseOptions = {
  keys: [
    { name: 'title', weight: 2 },
    { name: 'excerpt', weight: 1.5 },
    { name: 'content', weight: 1 },
    { name: 'tags', weight: 1 },
    { name: 'category', weight: 1 }
  ],
  includeScore: true,
  threshold: 0.4,  // Lower threshold means more strict matching
  ignoreLocation: true
};

let fuse: Fuse<BlogPost> | null = null;

export function initializeSearch(posts: BlogPost[]) {
  fuse = new Fuse(posts, fuseOptions);
}

export function searchPosts(query: string, posts: BlogPost[]): BlogPost[] {
  if (!query.trim()) {
    return posts;
  }

  if (!fuse) {
    initializeSearch(posts);
  }

  const results = fuse!.search(query);
  return results.map(result => result.item);
}

export function filterPostsByTag(posts: BlogPost[], tag: string): BlogPost[] {
  if (tag === 'All') {
    return posts;
  }
  
  return posts.filter(post => post.tags.includes(tag) || post.category === tag);
}
