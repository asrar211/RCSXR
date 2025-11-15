import { createContext, useContext, useEffect, useState } from "react";
import type { CartItem, CartContextType } from "../types/Cart";
import type { Product } from "../types/Product";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: {children: React.ReactNode}) => {
    const [items, setItems] = useState<CartItem[]>(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items));
    }, [items]);

    const addItem = (product: Product) => {
    setItems((prev) => {
    const exists = prev.find((it) => it.id === product.id);

    if (exists) {
      return prev.map((it) =>
        it.id === product.id
          ? { ...it, quantity: it.quantity + 1 }
          : it
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });
    };


    const removeItem = (id: string) => {
        setItems((prev) => prev.filter((it) => it.id !== id));
    };

    const updateQty = (id: string, qty: number) => {
        setItems((prev) => 
        prev.map((it) => 
        it.id === id ? { ...it, quantity: Math.max(1, qty)} : it));
    };

    const clearCart = () => {
        setItems([]);
    };
    const totalQuantity = items.reduce((acc, it) => acc + it.quantity, 0);
    const totalPrice = items.reduce(
        (acc, it) => acc + it.quantity * it.price,
        0
    );

    return (
        <CartContext.Provider
        value={{
            items,
            addItem,
            removeItem,
            updateQty,
            clearCart,
            totalQuantity,
            totalPrice
        }} >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) throw new Error("Cart Context must be used within the CartProvider");
    return context;
}