import { useReducer } from "react";
import CartContext from "./cart-context";
import CartReducer from "./CartReducer";

const CartProvider = (props) => {
  console.log("Provider");

  const [cart, dispatchCart] = useReducer(CartReducer, {
    items: [],
    cartTotalAmount: 0,
  });

  const addCartHandler = (item) => {
    dispatchCart({ type: "ADD_PRODUCTS", item: item });
  };

  return (
    <CartContext.Provider
      value={{
        items: cart.items,
        onAddToCart: addCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
