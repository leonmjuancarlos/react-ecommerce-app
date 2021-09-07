import { useContext, useState } from 'react'
import { CartContext } from '../../App'
import isTouchDevice from '../../utils/isTouchDevice'
import './Product.css'

export default function Product({ data }) {
  const [isShown, setIsShown] = useState(false)
  const { dispatch } = useContext(CartContext)

  return (
    <div
      className="product"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="product__img__wrapper">
        <img src={data.images[0]} />
      </div>
      <div className="product__info">
        <a href="#" className="product__title">
          {data.title}
        </a>
        <span className="product__price">{`$${
          Math.round(data.price * 100) / 100
        }`}</span>
        <p className="product__description">{data.description}</p>
        <button
          className={
            isTouchDevice()
              ? 'add__btn add__btn--active'
              : isShown
              ? 'add__btn add__btn--active'
              : 'add__btn'
          }
          onClick={() => {
            dispatch({
              type: 'ADD_PRODUCT_TO_CART',
              product: data,
              price: data.price,
            })
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}
