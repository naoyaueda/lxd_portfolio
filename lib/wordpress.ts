const WORDPRESS_API_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  'https://projects.helloyukie.com/wp-json/wp/v2';

export interface WordPressPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: any;
}

export interface WordPressPage {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: any;
}

// Fetch all posts (for portfolio work)
export async function getPortfolioPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?_embed&per_page=100`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error('Failed to fetch portfolio posts:', response.statusText);
      return [];
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching portfolio posts:', error);
    return [];
  }
}

// Fetch individual post by ID
export async function getPortfolioPost(id: number): Promise<WordPressPost | null> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts/${id}?_embed`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch {
    return null;
  }
}

// Fetch all pages (for Projects section)
export async function getPortfolioPages(): Promise<WordPressPage[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/pages?_embed&per_page=100`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error('Failed to fetch portfolio pages:', response.statusText);
      return [];
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching portfolio pages:', error);
    return [];
  }
}

// Fetch individual page by slug
export async function getPortfolioPageBySlug(slug: string): Promise<WordPressPage | null> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/pages?slug=${slug}&_embed`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return null;
    }
    const json = await response.json();
    return json.length > 0 ? json[0] : null;
  } catch {
    return null;
  }
}

// Helper to get featured image URL of a post or page, if available
export function getFeaturedImageUrl(postOrPage: any): string {
  try {
    return (
      postOrPage._embedded['wp:featuredmedia'][0].source_url ||
      '/images/placeholder.png'
    );
  } catch {
    return '/images/placeholder.png';
  }
}

// Helper to get featured image alt text
export function getFeaturedImageAlt(postOrPage: any): string {
  try {
    return (
      postOrPage._embedded['wp:featuredmedia'][0].alt_text || 'Featured image'
    );
  } catch {
    return 'Featured image';
  }
}
