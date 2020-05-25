import React from 'react';
import "./checkoutItem.styles.scss";
import { connect } from "react-redux";
import { deleteItem, addItem, removeItem } from "../../redux/cart/cartActions";

const CheckoutItem = ({ item, deleteItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = item;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => removeItem(item)} className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div onClick={() => addItem(item)} className="arrow">&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => deleteItem(item)}>&#10005;</div>
        </div>
    )
}


export default connect(null, {
    deleteItem, addItem, removeItem
})(CheckoutItem)
