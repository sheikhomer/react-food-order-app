import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useContext, useState } from "react";
import MealsContext  from "../../store/MealsContext";
import CartContext from "../../store/CartContext";
const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);
  const mealsContext = useContext(MealsContext);
  const cartContext = useContext(CartContext);
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const addToCartHandler = () => {
      let selectedMeal = mealsContext.meals.find((meal)=> meal.id === props.id);
      
      cartContext.onAddItem({
          ...selectedMeal,
          amount: amount,
      });
  };
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          name: "amount",
          step: "1",
          value: amount,
          onChange: amountChangeHandler,
        }}
      />
      <button type="button" onClick={addToCartHandler}>Add</button>
    </form>
  );
};

export default MealItemForm;
