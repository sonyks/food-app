import { useContext, useState } from "react";
import { CartItem } from "../../models/cart-item.model";
import CartContext from "../../store/cart-context";
import { Modal } from "../UI/Modal";
import { CartProps } from "./cart-props.model";
import "./Cart.scss";
import { CartItemComponent } from "./CartItem";
import { Checkout } from "./Checkout";

export const Cart = (props: CartProps) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item: CartItem) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

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

  const modalActions = (
    <div className="actions">
      <button className="button--alt" onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className="button" onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onClose={props.onClose} />}
      {!isCheckout && modalActions}
    </Modal>
  );
};
