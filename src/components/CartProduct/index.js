import './CartProduct.css'

import { useContext } from 'react'

import { CartContext } from '../../App'
import useCounter from '../../hooks/useCounter'
import Counter from '../Counter'

export default function CartProduct({ product }) {
  const counterHook = useCounter(1)
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
        <Counter product={product} counterHook={counterHook} />
        <i
          className="bx bxs-trash remove-product-from-cart-btn"
          onClick={() => {
            dispatch({
              type: 'REMOVE_PRODUCT_FROM_CART',
              product,
              totalProductPrice: counterHook.count * product.price,
            })
          }}
        ></i>
      </div>
    </div>
  )
}
