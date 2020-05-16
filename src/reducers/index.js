import updateGroceryList from "./grocery-list";
import updateShoppingCart from "./shopping-cart";

const reducer = (state, action) => {
  return {
    groceryList: updateGroceryList(state, action),
    shoppingCart: updateShoppingCart(state, action),
  };
};

export default reducer;
