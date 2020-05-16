import React from "react";
import { connect } from "react-redux";

import "./grocery-list-item.css";

const GroceryListItem = ({ item, onAddedToCart, cartItems }) => {
  const { name, price, itemImage } = item;

  let count = 0;
  cartItems.forEach((cartItem) => {
    if (cartItem.name === name) {
      count = cartItem.count;
    }
  });

  return (
    <div className="grocery-list-item">
      <div className="item-image">
        <img src={itemImage} alt="Item" />
      </div>
      <div className="item-details">
        <span className="item-name">{name}, lb</span>
        <span className="item-count">Quantity: {count}</span>
        <div className="item-price">${price.toFixed(2)}</div>
      </div>
      <button onClick={onAddedToCart} className="btn btn-info add-to-cart">
        Add to cart
      </button>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems } }) => {
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps)(GroceryListItem);
