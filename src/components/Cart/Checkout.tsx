import { CheckoutProps } from "./checkout-props.model";
import "./Checkout.scss";

export const Checkout = (props: CheckoutProps) => {
  const confirmHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className="control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className="control">
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className="control">
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className="control">
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button type="button" onClick={props.onClose}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};
