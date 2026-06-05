export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  date?: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  hours: string;
  email?: string;
}
