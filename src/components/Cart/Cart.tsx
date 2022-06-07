import { useContext } from "react";
import { CartItem } from "../../models/cart-item.model";
import CartContext from "../../store/cart-context";
import { Modal } from "../UI/Modal";
import { CartProps } from "./cart-props.model";
import "./Cart.scss";
import { CartItemComponent } from "./CartItem";

export const Cart = (props: CartProps) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id: string) => {};
  const cartItemAddHandler = (item: CartItem) => {};

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItemComponent
          item={item}
          key={item.id}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
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
