import type { Product } from './Product';

export type CartItem = Product & {
    quantity: number;
}

export type CartContextType = {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (id: string) => void;
    updateQty: (id: string, qty: number) => void;
    clearCart: () => void;
    totalQuantity: number;
    totalPrice: number;
}