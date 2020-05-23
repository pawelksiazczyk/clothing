import { act } from "react-dom/test-utils"

const INITIAL_STATE = {
    hidden: true
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "TOOGLE_CART_HIDDEN":
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }

}