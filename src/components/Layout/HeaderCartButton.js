import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";
const HeaderCartButton = () => {
  const cartContext = useContext(CartContext);
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  useEffect(()=>{
    setButtonIsHighlighted(true);
    const timer = setTimeout(()=>{
      setButtonIsHighlighted(false);
    }, 300)
    return () => {
     clearTimeout(timer);
    }
  },[cartContext.cartItems])
  const displayCart = () => {
    cartContext.onDisplayCart();
  }
  const buttonClasses = `${styles.button} ${buttonIsHighlighted? styles.bump:''}`;
  return (
    <button className={buttonClasses} onClick={displayCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartContext.cartItems.length}</span>
    </button>
  );
};

export default HeaderCartButton;
