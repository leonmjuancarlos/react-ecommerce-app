import { useState } from 'react'
import CartProduct from '../components/CartProduct/CartProduct'
import './CartPage.css'

export default function CartPage({ products }) {
  // (products.reduce((acc, el) => acc + el.price, 0) * 100) / 100

  const [totalPrice, setTotalPrice] = useState(
    products.reduce((acc, el) => acc + el.price, 0)
  )

  return (
    <div className="shipping-cart">
      <div className="shipping-cart-header">
        <i className="bx bx-cart bx-md" />
        Shipping Cart
      </div>
      {products.map((el) => (
        <CartProduct
          product={el}
          key={el.title}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      ))}
      <div className="shipping-cart-footer">
        Total price:
        <span>${Math.round(totalPrice * 100) / 100}</span>
      </div>
    </div>
  )
}
