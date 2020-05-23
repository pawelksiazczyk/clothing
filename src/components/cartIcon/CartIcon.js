import React from 'react';
import "./cartIcon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/original.svg";
import { connect } from "react-redux";
import { hiddenCart } from "../../redux/cart/cartActions"

const CartIcon = (props) => {

    const toogleCartHandle = () => {
        props.toogleCartHidden();
    }

    return (
        <div className="cart-icon" onClick = {toogleCartHandle}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toogleCartHidden: () => {dispatch(hiddenCart())}
    }
}

export default connect(null,mapDispatchToProps)(CartIcon);
