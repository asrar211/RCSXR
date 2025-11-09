import { createContext, useState, useEffect, useContext } from "react";
import { api } from "../utils/api";
import type { Product, ProductContextType } from "../types/Product";

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: {children: React.ReactNode}) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await api.get("/products");
            setProducts(res.data.products);
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to fetch Products");
        } finally {
            setLoading(false);
        }
    };

    const getProductById = (id: string): Product | undefined => {
    return products.find((p) => p.id === id);
    };

    const addProduct = async (data: Omit<Product, "id" | "createdAt">) => {
        try {
            const res = await api.post("/products", data);
            setProducts((prev) => [res.data.products, ...prev]);
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to add Product");
        }
    };

    const updateProduct = async (id: string, data: Partial<Product>) => {
        try {
            const res = await api.put("/products/${id}", data); //TODO:change route
            setProducts((prev) => 
            prev.map((p) => (p.id === id ? { ...p, ...res.data.product } : p))
            );
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to Update Product")
        }
    };

    const deleteProduct = async (id: string) => {
        try {
            await api.delete("/products/${id}");
            setProducts((prev) => prev.filter((p) => p.id !== id));
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to Delete Product");
        }
    };

    const getProductsByCategory = async (category: string): Promise<Product[]> => {
        try {
            setLoading(true);
            setError(null);
            const res = await api.get(`/products?category=${category}`);
            setProducts(res.data.products);
            return res.data.products;
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to get products by category");
            return [];
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider 
        value={{ products, loading, error, fetchProducts, getProductById, addProduct, updateProduct, deleteProduct, getProductsByCategory }}
        >
            {children}
        </ProductContext.Provider>
    )
};

export const useProductContext = (): ProductContextType => {
    const context = useContext(ProductContext);
    if (!context) throw new Error("useProductContext must be used within ProductProvider");
    return context;
}