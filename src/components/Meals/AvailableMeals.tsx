import { Card } from "../UI/Card";
import "./AvailableMeals.scss";
import { MealItem } from "./MealItem/MealItem";
import { useEffect, useState } from "react";
import { getMeals } from "../../firebase-service/firebase";

export const AvailableMeals = () => {
  const [mealsList, setMealLeast] = useState<JSX.Element[] | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getMeals()
      .then((meals) => {
        const mapMeals = meals.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ));

        setMealLeast(mapMeals);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <section className="meals-loading">
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="meals">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
