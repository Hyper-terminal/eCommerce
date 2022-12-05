const CartReducer = (state, action) => {
  if (action.type === "ADD_PRODUCTS") {
    const updatedState = { ...state };

    // check if item already exists or not
    const itemIndex = state.items.findIndex(
      (item) => item.title === action.item.title
    );

    if (itemIndex >= 0) {
      // means it already exists
      updatedState.items[itemIndex].quantity += 1;
    } else {
      // doesn't exists
      updatedState.items.push(action.item);
    }

    return updatedState;
  }


  return {
    items: [],
    cartTotalAmount: 0
  }
};

export default CartReducer;
