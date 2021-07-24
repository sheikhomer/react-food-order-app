import styles from "./MealItem.module.css";
import Card from "../UI/Card";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  return (
    <Card className={styles.meal}>
      <div>
        <h3>{props.mealItem.name}</h3>
        <div className={styles.description}>{props.mealItem.description}</div>
        <div className={styles.price}>{`$${props.mealItem.price}`}</div>
      </div>
      <div>
          <MealItemForm id={props.mealItem.id}/>
      </div>
    </Card>
  );
};

export default MealItem;
