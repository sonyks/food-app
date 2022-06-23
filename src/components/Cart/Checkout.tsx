import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { CheckoutProps } from "./checkout-props.model";
import "./Checkout.scss";

type CheckoutInputs = {
  name: string;
  street: string;
  postal: string;
  city: string;
};

export const Checkout = (props: CheckoutProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutInputs>();

  const onSubmit: SubmitHandler<CheckoutInputs> = (data) => console.log(data);
  const onSubmitError: SubmitErrorHandler<CheckoutInputs> = (data) =>
    console.log(data);

  return (
    <form
      className="checkout-form"
      onSubmit={handleSubmit(onSubmit, onSubmitError)}
    >
      <div className="checkout-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
      </div>
      <div className="checkout-control">
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          {...register("street", { required: true })}
        />
        {errors.street && <span>This field is required</span>}
      </div>
      <div className="checkout-control">
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          {...register("postal", { required: true })}
        />
        {errors.postal && <span>This field is required</span>}
      </div>
      <div className="checkout-control">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          {...register("city", { required: true })}
        />
        {errors.city && <span>This field is required</span>}
      </div>
      <div className="checkout-actions">
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className="checkout-submit">Confirm</button>
      </div>
    </form>
  );
};
