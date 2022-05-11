import "./MealItem.scss";
import { MealItemProps } from "./meal-item-props.model";
import { MealItemForm } from "./MealItemForm";

export const MealItem = (props: MealItemProps) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};
