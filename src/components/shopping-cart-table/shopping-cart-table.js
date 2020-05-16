import React from "react";
import { connect } from "react-redux";

import "./shopping-cart-table.css";

import {
  itemAddedToCart,
  itemRemovedFromCart,
  allItemsRemovedFromCart,
} from "../../actions";

const ShoppingCartTable = ({ items, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, name, count, total } = item;
    return (
      <tr key={id}>
        <td className="item-number">{idx + 1}</td>
        <td>{name}, lb</td>
        <td>{count}</td>
        <td>${total.toFixed(2)}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-md"
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-md"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-md"
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table table-hover">
        <thead className="thead-light table-header">
          <tr className="table-shadow">
            <th className="item-number">#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{items.map(renderRow)}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems } }) => {
  return {
    items: cartItems,
  };
};

const mapDispatchToProps = {
  onIncrease: itemAddedToCart,
  onDecrease: itemRemovedFromCart,
  onDelete: allItemsRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
