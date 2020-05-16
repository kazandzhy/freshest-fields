import React from "react";
import { GroceryStoreServiceConsumer } from "../grocery-store-service-context";

const withGroceryStoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <GroceryStoreServiceConsumer>
        {(groceryStoreService) => {
          return (
            <Wrapped {...props} groceryStoreService={groceryStoreService} />
          );
        }}
      </GroceryStoreServiceConsumer>
    );
  };
};

export default withGroceryStoreService;
