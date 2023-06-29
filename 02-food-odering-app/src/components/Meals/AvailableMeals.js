import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        "https://testing-62899-default-rtdb.firebaseio.com/Meals.json"
      );
      if (!res.ok) {
        throw new Error("Something Went wrong!");
      }
      const MealsData = await res.json();
      const loadedData = [];
      for (const key in MealsData) {
        loadedData.push({
          id: key,
          name: MealsData[key].name,
          description: MealsData[key].description,
          price: MealsData[key].price,
        });
      }
      setMeals(loadedData);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealIsLoading}>
        <h1>Loading meals...</h1>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.mealIsLoading}>
        <h1>{httpError}</h1>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
