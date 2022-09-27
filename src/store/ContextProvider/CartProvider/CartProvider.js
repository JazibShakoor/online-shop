import React from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
};

const CartProvider = (props) => {
  const cartContext = {
    items: defaultCartState.items,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
