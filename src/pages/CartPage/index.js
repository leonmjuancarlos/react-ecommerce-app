import './CartPage.css'

import { useContext } from 'react'

import { CartContext } from '../../App'
import CartProduct from '../../components/CartProduct'

export default function CartPage({ products }) {
  const { state } = useContext(CartContext)

  return (
    <div className="shipping-cart">
      <div className="shipping-cart__header">
        <i className="bx bx-cart bx-md" />
        Shipping Cart
      </div>
      {products.map((el) => (
        <CartProduct product={el} key={el.title} />
      ))}
      <div className="shipping-cart__footer">
        Total price:
        <span>${Math.round(state.totalPrice * 100) / 100}</span>
      </div>
    </div>
  )
}
