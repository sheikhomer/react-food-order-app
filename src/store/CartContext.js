import React, { useReducer } from "react";

const CartContext = React.createContext({
  cartItems: [],
  cartTotal: 0,
  displayCart: false,
  onDisplayCart: () => {},
  onCloseCart: () => {},
  onAddItem: (item) => {},
});
const cartReducer = (state, action) => {
  switch (action.type) {
    case "CLOSE_CART":
      return {
        ...state,
        displayCart: false,
      };
    case "DISPLAY_CART":
      return {
        ...state,
        displayCart: true,
      };
    case "ADD":
      return addToCart(state, action.value);
    default:
      return;
  }
};
const addToCart = (state, item) => {
  let existingCartItem = state.cartItemList.find(
    (cartItem) => cartItem.id === item.id
  );
  if (existingCartItem) {
    let cartItems = state.cartItemList.map((cartItem) => {
      if (cartItem.id === existingCartItem.id) {
        cartItem.amount = +item.amount + +cartItem.amount;
        return cartItem;
      }
      return cartItem;
    });
    cartItems = cartItems.filter((citem) => citem.amount > 0);
    return {
      cartItemList: cartItems,
      displayCart: true,
      totalAmount: calculateCartTotal(cartItems),
    };
  }
  let cartItems = [...state.cartItemList, item];
  return {
    cartItemList: cartItems,
    displayCart: true,
    totalAmount: calculateCartTotal(cartItems),
  };
};
const calculateCartTotal = (cartItems) => {
  const prices = cartItems.map((item) => {
    return item.amount * item.price;
  });
  return prices.reduce((total, price) => total + price, 0);
};
export const CartContextProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    cartItemList: [],
    displayCart: false,
    totalAmount: 0,
  });
  const closeCartHandler = () => {
    dispatchCart({ type: "CLOSE_CART" });
  };
  const showCartHandler = () => {
    dispatchCart({ type: "DISPLAY_CART" });
  };

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", value: item });
    // setCartItemList((prevState) => {
    //   let existingCartItem = prevState.find(
    //     (cartItem) => cartItem.id === item.id
    //   );
    //   if (existingCartItem) {
    //     return prevState.map((cartItem) => {
    //       if (cartItem.id === existingCartItem.id) {
    //         cartItem.amount = +item.amount + +cartItem.amount;
    //         return cartItem;
    //       }
    //       return cartItem;
    //     });
    //   }
    //   return [...prevState, item];
    // });
  };
  const { cartItemList, displayCart, totalAmount } = cartState;
  return (
    <CartContext.Provider
      value={{
        cartItems: cartItemList,
        displayCart: displayCart,
        cartTotal: totalAmount,
        onCloseCart: closeCartHandler,
        onDisplayCart: showCartHandler,
        onAddItem: addItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
