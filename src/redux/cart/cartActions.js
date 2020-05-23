export const hiddenCart = () => {
    return {
      type: "TOOGLE_CART_HIDDEN"
    };
}

export const addItem = (item) => {
    return {
      type: "ADD_ITEM",
      payload: item
    };
}