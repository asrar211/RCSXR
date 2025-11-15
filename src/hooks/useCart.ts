import { useCartContext } from "../context/CartContext";

export const useCart = () => {
    const {
        items,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        totalQuantity,
        totalPrice
    } = useCartContext();

    return {
        items,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        totalQuantity,
        totalPrice
    };
}