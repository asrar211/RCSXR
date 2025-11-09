export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  discount: number;
  image: string;
  rating: number;
  stock: number;
  createdAt: string;
};

export type ProductContextType = {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  getProductById: (id: string) => Product | undefined;
  addProduct: (data: Omit<Product, "id" | "createdAt">) => Promise<void>;
  updateProduct: (id: string, data: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  getProductsByCategory: (category: string) => Promise<Product[]>;
}