import { CartAction, CartActionTypes } from "./cart-actions";
import { defaultState } from "./cart-context";
import { IState } from "./state";

export const cartReducer = (state: IState, action: CartAction): IState => {
  switch (action.type) {
    case CartActionTypes.AddCartItem:
      return {
        ...state,
        items: [...state.items, action.payload],
        totalAmount:
          state.totalAmount + action.payload.price * action.payload.amount,
      };
    case CartActionTypes.RemoveCartItem:
      const findItem = state.items.find((item) => item.id === action.payload);
      const price = findItem ? findItem?.amount * findItem?.price : 0;
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload)],
        totalAmount: state.totalAmount - price,
      };
    default:
      return defaultState;
  }
};
