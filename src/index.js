import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import GroceryStoreService from "./services/grocery-store-service";
import { GroceryStoreServiceProvider } from "./components/grocery-store-service-context";

import store from "./store";

const groceryStoreService = new GroceryStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <GroceryStoreServiceProvider value={groceryStoreService}>
        <Router>
          <App />
        </Router>
      </GroceryStoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
