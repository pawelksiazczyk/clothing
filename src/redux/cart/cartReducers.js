import { addItemToCart, removeItem } from "./cart.utils"

const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "TOOGLE_CART_HIDDEN":
            return {
                ...state,
                hidden: !state.hidden
            }
        case "ADD_ITEM":
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case "DELETE_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case "REMOVE_ITEM":
            return{
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            }
        default:
            return state;
    }

}