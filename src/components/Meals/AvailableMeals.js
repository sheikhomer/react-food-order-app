import { useContext } from "react";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import MealsContext from "../../store/MealsContext";

const AvailableMeals = () => {
  const mealsContext = useContext(MealsContext);
  return (
    <section className={styles.meals}>
      <ul>
        {mealsContext.meals.map((meal) => {
          return (
            <li key={meal.id}>
              <MealItem mealItem={meal} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default AvailableMeals;
