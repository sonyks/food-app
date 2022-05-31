import { Props } from "../models/props.model";
import CartContext, { defaultState } from "./cart-context";

export const CartProvider = (props: Props) => {
  const addItemToCart = (item: any) => {};

  const removeItemFromCart = (id: any) => {};

  const cartContext = {
    ...defaultState,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
