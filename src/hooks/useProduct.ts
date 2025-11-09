import { useProductContext } from "../context/ProductContext";

export const useProducts = () => {
    const {
        products,
        loading, 
        error, 
        fetchProducts, 
        getProductById,
        addProduct, 
        updateProduct, 
        deleteProduct,
        getProductsByCategory,
    } = useProductContext();

    const totalProducts = products.length;
    const outOfStock = products.filter((p) => p.stock === 0).length;

    return {
        products,
        loading, 
        error, 
        totalProducts,
        outOfStock,
        fetchProducts,
        addProduct,
        getProductById,
        updateProduct, 
        deleteProduct,
        getProductsByCategory,
    };
};