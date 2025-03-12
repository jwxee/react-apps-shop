export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  orders: number[];
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  sizes: number[];
  inStock: boolean;
  description: string;
  mainImage: string;
  images: string[];
}

export interface CartItem {
  id: number;
  userId: number;
  productId: number;
  size: number;
  product: Product;
}

export interface Order {
  id: number;
  userId: number;
  items: CartItem[];
  address: string;
  date: string;
  status: string;
  totalAmount: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface ProductFilters {
  brand?: string;
  inStock?: boolean;
  size?: number;
  searchQuery?: string;
}