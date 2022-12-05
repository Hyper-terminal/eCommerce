import React from "react";

const CartContext = React.createContext({
  items: [],
  cartTotalAmount: 0
});
export default CartContext;
