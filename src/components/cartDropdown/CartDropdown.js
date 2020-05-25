import React from 'react';
import CustomButton from "../custom-button/CustomButton";
import "./cartDropdown.styles.scss";
import CartItem from "../cart-item/CartItem"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { hiddenCart } from "../../redux/cart/cartActions"

const CartDropdown = ({ cartItems, history, hiddenCart }) => {
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length 
                ? cartItems.map((cartItem) => {
                    return <CartItem key={cartItem.id} item={cartItem}/>
                  })
                :<span className="empty-message">Your cart is empty</span>
            }
        </div>
          <CustomButton onClick={() => {history.push("/checkout"); hiddenCart()}}>GO TO CHECKOUT</CustomButton>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
}

export default withRouter(connect(mapStateToProps, {
  hiddenCart
})(CartDropdown));
