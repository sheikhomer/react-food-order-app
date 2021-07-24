import { useContext } from "react";
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const closeCart = () => {
    cartContext.onCloseCart();
  };
  const addItemHandler = (id) => {
    let item = cartContext.cartItems.find((item) => item.id === id);
    cartContext.onAddItem({
      ...item,
      amount: 1,
    });
  };

  const removeItemHandler = (id) => {
    let item = cartContext.cartItems.find((item) => item.id === id);
    cartContext.onAddItem({
      ...item,
      amount: -1,
    });
  };
  return (
    <Modal onClose={closeCart}>
      <ul>
        {cartContext.cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onAdd={addItemHandler}
              onRemove={removeItemHandler}
            />
          );
        })}
      </ul>

      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{`$${cartContext.cartTotal.toFixed(2)}`}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button-alt"]} onClick={closeCart}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
