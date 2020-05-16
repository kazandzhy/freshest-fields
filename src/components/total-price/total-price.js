import React from "react";
import { connect } from "react-redux";

import "./total-price.css";

const TotalPrice = ({ total }) => {
  if (total < 0.1 && total > -0.1) {
    total = 0;
  }
  return (
    <div className="total-price">
      <h4>Total: ${total.toFixed(2)}</h4>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { orderTotal } }) => {
  return {
    total: orderTotal,
  };
};

export default connect(mapStateToProps)(TotalPrice);
