import React, { useReducer } from 'react'
import Navbar from './components/Navbar/Navbar'
import Shop from './components/Shop/Shop'
import CartPage from './pages/CartPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

const initialState = {
  products: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      if (state.products.includes(action.product)) {
        return state
      } else {
        return {
          ...state,
          products: [...state.products, action.product],
        }
      }

    case 'REMOVE_PRODUCT_FROM_CART': {
      const tmpProducts = [...state.products]
      tmpProducts.splice(tmpProducts.indexOf(action.product), 1)
      return {
        ...state,
        products: [...tmpProducts],
      }
    }

    case 'CLEAN_CART':
      return {
        ...state,
        products: [],
      }
    default:
      return state
  }
}

export const CartContext = React.createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Router>
      <CartContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/cart">
            <CartPage products={state.products} />
          </Route>
        </Switch>
      </CartContext.Provider>
    </Router>
  )
}

export default App
