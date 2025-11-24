// WordPress API Configuration and Helper Functions

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://projects.helloyukie.com/wp-json/wp/v2';

export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  categories: number[];
  tags: number[];
  acf?: any; // Advanced Custom Fields if you're using them
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

/**
 * Fetch all portfolio posts from WordPress
 */
export async function getPortfolioPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?_embed&per_page=100`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch portfolio posts');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching portfolio posts:', error);
    return [];
  }
}

/**
 * Fetch a single portfolio post by ID
 */
export async function getPortfolioPost(id: number): Promise<WordPressPost | null> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts/${id}?_embed`, {
      next: { revalidate: 60 },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch post ${id}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    return null;
  }
}

/**
 * Get featured image URL from post
 */
export function getFeaturedImageUrl(post: WordPressPost): string {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80';
}

/**
 * Get featured image alt text from post
 */
export function getFeaturedImageAlt(post: WordPressPost): string {
  return post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered;
}
