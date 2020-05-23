import { userReducer } from "./user/userReducer";
import { cartReducer } from "./cart/cartReducers"
import { combineReducers } from "redux";

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})