import React from "react";

const CartContext = React.createContext({
  items: [],
  cartTotalAmount: 0,
  onRemoveFromCart: () => {},
  onAddToCart: () => {},
});
export default CartContext;
