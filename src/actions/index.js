const itemsRequested = () => {
  return {
    type: "FETCH_ITEMS_REQUEST",
  };
};

const itemsLoaded = (newItems) => {
  return {
    type: "FETCH_ITEMS_SUCCESS",
    payload: newItems,
  };
};

const itemsError = (error) => {
  return {
    type: "FETCH_ITEMS_FAILURE",
    payload: error,
  };
};

export const itemAddedToCart = (itemId) => {
  return {
    type: "ITEM_ADDED_TO_CART",
    payload: itemId,
  };
};

export const itemRemovedFromCart = (itemId) => {
  return {
    type: "ITEM_REMOVED_FROM_CART",
    payload: itemId,
  };
};

export const allItemsRemovedFromCart = (itemId) => {
  return {
    type: "ALL_ITEMS_REMOVED_FROM_CART",
    payload: itemId,
  };
};

const fetchItems = (groceryStoreService) => () => (dispatch) => {
  dispatch(itemsRequested());
  groceryStoreService
    .getItems()
    .then((data) => dispatch(itemsLoaded(data)))
    .catch((err) => dispatch(itemsError(err)));
};

export { fetchItems };
