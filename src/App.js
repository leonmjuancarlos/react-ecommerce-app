import React, { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { cartReducer } from './reducers/cart.reducer'
import { getBrands, phones } from './data/phones'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import CartPage from './pages/CartPage'
import './App.css'
import ProductPage from './pages/ProductPage'

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
  return (
    <Router>
      <CartContext.Provider value={{ state, dispatch }}>
        <GlobalStyle />
        <ThemeProvider theme={theme.dark}>
          <Navbar />
          <Switch>
            <Route exact path="/react-ecommerce-app">
              <Shop getBrands={getBrands} phones={phones}></Shop>
            </Route>
            <Route exact path="/">
              <Shop getBrands={getBrands} phones={phones}></Shop>
            </Route>
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
