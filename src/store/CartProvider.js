import { useReducer } from "react";
import CartContext from "./cart-context";
import CartReducer from "./CartReducer";

const CartProvider = (props) => {
    const [cart, dispatchCart] = useReducer(CartReducer, {
        items: [],
        cartTotalAmount: 0,
    });

    const addCartHandler = (item) => {
        dispatchCart({ type: "ADD_PRODUCT", item: item });
    };

    const removeCartHandler = (id) => {
        dispatchCart({ type: "REMOVE_PRODUCT", id: id });
    };

    return (
        <CartContext.Provider
            value={{
                items: cart.items,
                cartTotalAmount: cart.cartTotalAmount,
                onAddToCart: addCartHandler,
                onRemoveFromCart: removeCartHandler,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};
export default CartProvider;
