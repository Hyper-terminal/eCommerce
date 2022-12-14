const CartReducer = (state, action) => {
    if (action.type === "FETCH_PRODUCT") {
        const updatedState = { ...state };

        if (action.items.length === 0) return state;

        const newItemsArr = action.items[action.items.length - 1];

        // updating items
        newItemsArr.items.forEach((prod) => updatedState.items.push(prod));

        // updating cartTotalAmount
        updatedState.cartTotalAmount = newItemsArr.cartTotalAmount;

        return updatedState;
    }

    if (action.type === "ADD_PRODUCT") {
        const updatedState = { ...state };

        const itemIndex = updatedState.items.findIndex(
            (item) => item.id === action.item.id
        );

        if (itemIndex >= 0) {
            updatedState.items[itemIndex].quantity += action.item.quantity;
        } else {
            updatedState.items.push(action.item);
        }

        updatedState.cartTotalAmount +=
            action.item.quantity * action.item.price;

        // add to backend

        fetch(
            `https://crudcrud.com/api/${process.env.REACT_APP_API_KEY}/cart${action.email}`,
            {
                method: "Post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedState),
            }
        )
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));

        return updatedState;
    }

    if (action.type === "REMOVE_PRODUCT") {
        const updatedState = { ...state };

        const itemIndex = updatedState.items.findIndex(
            (item) => item.id === action.id
        );

        updatedState.cartTotalAmount -= updatedState.items[itemIndex].price;

        if (updatedState.items[itemIndex].quantity > 1) {
            // decrease quantity by 1
            updatedState.items[itemIndex].quantity -= 1;
        } else {
            //remove from cart
            updatedState.items = state.items.filter(
                (item) => item.id !== action.id
            );
        }

        //remove from backend

        return updatedState;
    }

    return {
        items: [],
        cartTotalAmount: 0,
    };
};

export default CartReducer;
