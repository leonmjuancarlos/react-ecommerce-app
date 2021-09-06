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
      <div className="product-img-wrapper">
        <img src={data.images[0]} />
      </div>
      <div className="product-info">
        <a href="#" className="product-title">
          {data.title}
        </a>
        <span className="product-price">{`$${
          Math.round(data.price * 100) / 100
        }`}</span>
        <p className="product-description">{data.description}</p>
        <button
          className={
            isTouchDevice()
              ? 'add-btn add-btn--active'
              : isShown
              ? 'add-btn add-btn--active'
              : 'add-btn'
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
