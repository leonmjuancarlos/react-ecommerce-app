import './App.css'

import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Navbar from './components/Navbar'
import { getBrands } from './data/phones'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import Shop from './pages/Shop'
import { cartReducer } from './reducers/cart.reducer'

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
            {/* <Route
              exact
              path="/react-ecommerce-app"
              render={() =>
                phones.length && (
                  <Shop getBrands={getBrands} phones={phones}></Shop>
                )
              }
            /> */}
            <Route
              exact
              path={['/', '/react-ecommerce-app']}
              render={() => {
                if (phones.length)
                  return <Shop getBrands={getBrands} phones={phones}></Shop>
              }}
            />
            <Route
              path="/cart"
              render={() => <CartPage products={state.products} />}
            />
            {/* Dynamic Route */}
            <Route
              path="/products/:productId"
              render={() => <ProductPage phones={phones} />}
            />
          </Switch>
        </ThemeProvider>
      </CartContext.Provider>
    </Router>
  )
}

export default App
