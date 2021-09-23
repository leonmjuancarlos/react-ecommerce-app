export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      if (state.products.includes(action.product)) {
        return state
      } else {
        return {
          ...state,
          products: [...state.products, action.product],
          totalPrice: state.totalPrice + action.price,
        }
      }

    case 'REMOVE_PRODUCT_FROM_CART': {
      const tmpProducts = [...state.products]
      tmpProducts.splice(tmpProducts.indexOf(action.product), 1)
      return {
        ...state,
        products: [...tmpProducts],
        totalPrice: state.totalPrice - action.totalProductPrice,
      }
    }

    case 'INCREMENT_TOTAL_PRICE': {
      return {
        ...state,
        totalPrice: state.totalPrice + action.price,
      }
    }

    case 'DECREMENT_TOTAL_PRICE': {
      return {
        ...state,
        totalPrice: state.totalPrice - action.price,
      }
    }

    case 'CLEAN_CART':
      return {
        ...state,
        products: [],
        totalPrice: 0,
      }
    default:
      return state
  }
}
