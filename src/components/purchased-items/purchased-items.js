import React from "react";
import { connect } from "react-redux";
import TotalPrice from "../total-price";

import "./purchased-items.css";

const PurchasedItems = ({ items }) => {
  const purchasedItems = items.map(({ name, total, count, id }) => {
    const item = `${name}, ${count} lb - ${total.toFixed(2)}`;
    return (
      <li key={id}>
        <h5>{item}</h5>
      </li>
    );
  });
  return (
    <div className="purchased-items">
      <div className="purchased-items-content">
        <div className="purchased-items-header">
          <h4>Items:</h4>
        </div>
        <div className="purchased-items-list">
          <ul>{purchasedItems}</ul>
        </div>
        <TotalPrice />
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems } }) => {
  return {
    items: cartItems,
  };
};

export default connect(mapStateToProps)(PurchasedItems);
