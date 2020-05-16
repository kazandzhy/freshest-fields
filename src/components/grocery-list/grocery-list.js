import React, { Component } from "react";
import GroceryListItem from "../grocery-list-item";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import withGroceryStoreService from "../hoc";
import { fetchItems, itemAddedToCart } from "../../actions";
import { compose } from "../../utils";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./grocery-list.css";

const GroceryList = ({ items, onAddedToCart }) => {
  return (
    <ul className="grocery-list">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <GroceryListItem
              item={item}
              onAddedToCart={() => onAddedToCart(item.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class GroceryListContainer extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    const { items, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <GroceryList items={items} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ groceryList: { items, loading, error } }) => {
  return { items, loading, error };
};

const mapDispatchToProps = (dispatch, { groceryStoreService }) => {
  return bindActionCreators(
    {
      fetchItems: fetchItems(groceryStoreService),
      onAddedToCart: itemAddedToCart,
    },
    dispatch
  );
};

export default compose(
  withGroceryStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(GroceryListContainer);
