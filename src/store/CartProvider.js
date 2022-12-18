import { useEffect, useReducer } from "react";
import CartContext from "./cart-context";
import CartReducer from "./CartReducer";

const productsArr = [
    {
        title: "Colors",
        id: 1,
        price: 100,

        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
        title: "Black and white Colors",
        id: 2,
        price: 50,

        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
        title: "Yellow and Black Colors",

        price: 70,
        id: 3,
        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
        title: "Blue Color",
        id: 4,
        price: 100,

        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
];

const CartProvider = (props) => {
    const [cart, dispatchCart] = useReducer(CartReducer, {
        items: [],
        cartTotalAmount: 0,
    });

    if (!localStorage.getItem("token")) {
        cart.items = [];
        cart.cartTotalAmount = 0;
    }

    let intialEmail = localStorage.getItem("email")
        ? localStorage.getItem("email")
        : "";
    const adjEmail = intialEmail.replace("@", "").replace(".", "");

    // make get request
    useEffect(() => {
        fetch(
            `https://crudcrud.com/api/cf4f2946da65452cbebe585421dbeff9/cart${adjEmail}`
        )
            .then((res) => res.json())
            .then((data) =>
                dispatchCart({ type: "FETCH_PRODUCT", items: data })
            )
            .catch((err) => console.log(err));
    }, [adjEmail]);

    const addCartHandler = (item) => {
        dispatchCart({
            type: "ADD_PRODUCT",
            item: item,
            email: adjEmail,
        });
    };
    const removeCartHandler = (id) => {
        dispatchCart({ type: "REMOVE_PRODUCT", id: id, email: adjEmail });
    };

    return (
        <CartContext.Provider
            value={{
                items: cart.items,
                cartTotalAmount: cart.cartTotalAmount,
                onAddToCart: addCartHandler,
                onRemoveFromCart: removeCartHandler,
                products: productsArr,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};
export default CartProvider;
