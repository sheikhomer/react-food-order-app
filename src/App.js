import React, { useContext } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContext from "./store/CartContext";

const App = () => {
  const cartContext = useContext(CartContext);
  return (
    <>
      {cartContext.displayCart && <Cart/>}
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
