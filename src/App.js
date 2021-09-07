import React, { useReducer } from 'react'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import CartPage from './pages/CartPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { cartReducer } from './reducers/cart.reducer'
import './App.css'

export const CartContext = React.createContext()

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    totalPrice: 0,
  })
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
