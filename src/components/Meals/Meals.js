import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import { MealContextProvider } from "../../store/MealsContext";

const Meals = () => {
  return (
    <>
      <MealsSummary />
      <MealContextProvider>
        <AvailableMeals />
      </MealContextProvider>
    </>
  );
};

export default Meals;
