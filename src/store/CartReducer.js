const CartReducer = (state, action) => {
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

        return updatedState;
    }

    
    return {
        items: [],
        cartTotalAmount: 0,
    };
};

export default CartReducer;
