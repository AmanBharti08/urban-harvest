import { CartItem } from "@/types/products";

export const calculateSubtotal = (cart: CartItem[]) => {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export const calculateTotalItems = (cart: CartItem[]) => {
  return cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
};