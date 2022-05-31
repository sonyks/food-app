import { CartIcon } from "../Cart/CartIcon";
import { HeaderCartButtonProps } from "./header-cart-button-props.model";
import "./HeaderCartButton.scss";

export const HeaderCartButton = (props: HeaderCartButtonProps) => {
  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </button>
  );
};
