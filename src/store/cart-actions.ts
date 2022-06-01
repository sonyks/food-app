import { CartItem } from "../models/cart-item.model";

export enum CartActionTypes {
  AddCartItem = "ADD_CART_ITEM",
  RemoveCartItem = "REMOVE_ITEM",
}

export type CartAction =
  | {
      type: CartActionTypes.AddCartItem;
      payload: CartItem;
    }
  | {
      type: CartActionTypes.RemoveCartItem;
      payload: string;
    };
