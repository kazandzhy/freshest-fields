import React from "react";
import { Route, Switch } from "react-router-dom";
import ShopHeader from "../shop-header";
import { connect } from "react-redux";

import { HomePage, CartPage, ConfirmPage } from "../pages";

import "./app.css";

const App = ({ items, total }) => {
  const numItems = Object.keys(items).length;
  return (
    <main role="main" className="container">
      <ShopHeader numItems={numItems} total={total} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
        <Route path="/confirm" component={ConfirmPage} />
      </Switch>
    </main>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

export default connect(mapStateToProps)(App);
