import React from "react";
import ShoppingCartTable from "../shopping-cart-table";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TotalPrice from "../total-price";

import "./cart-page.css";

const CartPage = ({ total }) => {
  if (total < 0.1 && total > -0.1) {
    total = 0;
  }

  let disabled = total === 0 ? true : false;
  return (
    <div className="cart-page">
      <ShoppingCartTable />
      <TotalPrice />
      <div className="complete-purchase">
        <Link to="/confirm">
          <button className="btn-success purchase-btn" disabled={disabled}>
            PURCHASE
          </button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { orderTotal } }) => {
  return {
    total: orderTotal,
  };
};

export default connect(mapStateToProps)(CartPage);
