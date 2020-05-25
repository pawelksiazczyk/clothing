import React from 'react';
import "./cartIcon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/original.svg";
import { connect } from "react-redux";
import { hiddenCart } from "../../redux/cart/cartActions"

const CartIcon = ({ toogleCartHidden, itemCount}) => {

    const toogleCartHandle = () => {
        toogleCartHidden();
    }

    return (
        <div className="cart-icon" onClick = {toogleCartHandle}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toogleCartHidden: () => {dispatch(hiddenCart())}
    }
}

const mapStateToProps = (state) => {
    return {
        itemCount: state.cart.cartItems.reduce((quantity, cartItem) => {
            return quantity + cartItem.quantity
        },0)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
