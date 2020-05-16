import React from "react";
import "./shop-header.css";
import { Link } from "react-router-dom";

const ShopHeader = ({ numItems, total }) => {
  const items = numItems === 1 ? "item" : "items";

  if (total < 0.1 && total > -0.1) {
    total = 0;
  }

  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo">
          <span>Freshest Fields</span>
        </div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          <span className="items-info">
            {numItems} {items} (${total.toFixed(2)})
          </span>
        </div>
      </Link>
    </header>
  );
};

export default ShopHeader;
