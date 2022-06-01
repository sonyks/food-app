import { useReducer } from "react";
import { CartItem } from "../models/cart-item.model";
import { Props } from "../models/props.model";
import { CartActionTypes } from "./cart-actions";
import CartContext, { defaultState } from "./cart-context";
import { cartReducer } from "./cart-reducer";
import { IState } from "./state";

export const CartProvider = (props: Props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  const addItemToCart = (item: CartItem) => {
    dispatchCartAction({ type: CartActionTypes.AddCartItem, payload: item });
  };

  const removeItemFromCart = (id: string) => {
    dispatchCartAction({ type: CartActionTypes.RemoveCartItem, payload: id });
  };

  const cartContext: IState = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
