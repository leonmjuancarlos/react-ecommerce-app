import { useContext, useState } from 'react'
import { CartContext } from '../../App'
import Counter from '../Counter/Counter'
import './CartProduct.css'

export default function CartProduct({ product }) {
  const [amount, setAmount] = useState(1)
  const { dispatch } = useContext(CartContext)

  return (
    <div className="cart__product">
      <img src={product.images[0]}></img>
      <div className="cart__product__info">
        <span>{product.title}</span>
        <p>{product.description}</p>
      </div>
      <div className="cart__product__controller">
        <span>${Math.round(product.price * 100) / 100} x</span>
        <Counter product={product} amount={amount} setAmount={setAmount} />
        <i
          className="bx bxs-trash remove-product-from-cart-btn"
          onClick={() => {
            dispatch({
              type: 'REMOVE_PRODUCT_FROM_CART',
              product,
              totalProductPrice: amount * product.price,
            })
          }}
        ></i>
      </div>
    </div>
  )
}
