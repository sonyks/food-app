import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { CartIcon } from "../Cart/CartIcon";
import { HeaderCartButtonProps } from "./header-cart-button-props.model";
import "./HeaderCartButton.scss";

export const HeaderCartButton = (props: HeaderCartButtonProps) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};
