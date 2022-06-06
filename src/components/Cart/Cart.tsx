import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Modal } from "../UI/Modal";
import { CartProps } from "./cart-props.model";
import "./Cart.scss";

export const Cart = (props: CartProps) => {
  const cartCtx = useContext(CartContext);
  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  const hasItems = cartCtx.items.length > 0;

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className="button">Order</button>}
      </div>
    </Modal>
  );
};
