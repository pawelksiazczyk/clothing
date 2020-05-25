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

export const deleteItem = (item) => {
  return {
    type: "DELETE_ITEM",
    payload: item
  }
}

export const removeItem = (item) => {
  return {
    type:"REMOVE_ITEM",
    payload:item
  }
}