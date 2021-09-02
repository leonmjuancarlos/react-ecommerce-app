import { useContext, useState } from 'react'
import { CartContext } from '../../App'
import Counter from '../Counter/Counter'
import './CartProduct.css'

export default function CartProduct({ product, totalPrice, setTotalPrice }) {
  const [amount, setAmount] = useState(1)
  const { dispatch } = useContext(CartContext)

  return (
    <div className="cart-product">
      <img src={product.images[0]}></img>
      <div className="cart-product-info">
        <span>{product.title}</span>
        <p>{product.description}</p>
      </div>
      <div className="cart-product-controller">
        <span>${Math.round(product.price * 100) / 100} x</span>
        <Counter
          product={product}
          amount={amount}
          setAmount={setAmount}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
        <i
          className="bx bxs-trash remove-product-from-cart-btn"
          onClick={() => {
            dispatch({
              type: 'REMOVE_PRODUCT_FROM_CART',
              product,
              totalProductPrice: amount * product.price,
            })
            setTotalPrice(totalPrice - product.price * amount)
          }}
        ></i>
      </div>
    </div>
  )
}
