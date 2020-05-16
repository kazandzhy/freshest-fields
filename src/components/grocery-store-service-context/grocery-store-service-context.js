import { createContext } from "react";

const {
  Provider: GroceryStoreServiceProvider,
  Consumer: GroceryStoreServiceConsumer,
} = createContext();

export { GroceryStoreServiceProvider, GroceryStoreServiceConsumer };
