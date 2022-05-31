import { createContext } from "react";

export const defaultState = {
  items: [],
  totalAmount: 0,
  addItem: (item: any) => {},
  removeItem: (id: any) => {},
};
const CartContext = createContext(defaultState);

export default CartContext;
