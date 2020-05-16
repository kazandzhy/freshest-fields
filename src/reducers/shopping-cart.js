const updateOrderTotal = (orderTotal, cartItem, newItem, quantity) => {
  if (newItem.count === 0) {
    return orderTotal - cartItem.total;
  }

  if (quantity === 1) {
    return orderTotal + newItem.total / newItem.count;
  }

  if (quantity === -1) {
    return orderTotal - cartItem.total / cartItem.count;
  }
};

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (cartItem, item = {}, quantity) => {
  const { id = cartItem.id, count = 0, name = cartItem.name, total = 0 } = item;

  return {
    id,
    name,
    count: count + quantity,
    total: total + quantity * cartItem.price,
  };
};

const updateOrder = (state, itemId, quantity) => {
  const {
    groceryList: { items },
    shoppingCart: { cartItems, orderTotal },
  } = state;

  const item = items.find(({ id }) => id === itemId);
  const itemIndex = cartItems.findIndex(({ id }) => id === itemId);
  const cartItem = cartItems[itemIndex];
  const newItem = updateCartItem(item, cartItem, quantity);

  return {
    orderTotal: updateOrderTotal(orderTotal, cartItem, newItem, quantity),
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  switch (action.type) {
    case "ITEM_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "ITEM_REMOVED_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "ALL_ITEMS_REMOVED_FROM_CART":
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
