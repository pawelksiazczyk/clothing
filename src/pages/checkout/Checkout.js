import React from 'react';
import "./checkout.styles.scss";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/CheckoutItem"

const Checkout = ({ cartItems, total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => {
                    return <CheckoutItem item={cartItem} key={cartItem.id}/>
                })
            }

            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems,
        total: state.cart.cartItems.reduce((acc, cartItem) => {
            return acc + cartItem.quantity * cartItem.price
        },0)
    }
}

export default connect(mapStateToProps)(Checkout)
