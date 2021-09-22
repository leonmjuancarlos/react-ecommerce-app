import React, { useEffect, useReducer, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { cartReducer } from './reducers/cart.reducer'
import { getBrands } from './data/phones'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import CartPage from './pages/CartPage'
import './App.css'
import ProductPage from './pages/ProductPage'
import axios from 'axios'

export const CartContext = React.createContext()

const GlobalStyle = createGlobalStyle`
  ul {
    list-style-type: none;
  }
`

const theme = {
  dark: {
    headerBackground: 'black',
  },
}

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    totalPrice: 0,
  })

  const [phones, setPhones] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/phones')
      .then((res) => setPhones(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <Router>
      <CartContext.Provider value={{ state, dispatch }}>
        <GlobalStyle />
        <ThemeProvider theme={theme.dark}>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/react-ecommerce-app"
              render={() =>
                phones.length && (
                  <Shop getBrands={getBrands} phones={phones}></Shop>
                )
              }
            ></Route>
            <Route
              exact
              path="/"
              render={() =>
                phones.length && (
                  <Shop getBrands={getBrands} phones={phones}></Shop>
                )
              }
            ></Route>
            <Route path="/cart">
              <CartPage products={state.products} />
            </Route>
            {/* Dynamic Route */}
            <Route path="/products/:productId">
              <ProductPage phones={phones} />
            </Route>
          </Switch>
        </ThemeProvider>
      </CartContext.Provider>
    </Router>
  )
}

export default App
