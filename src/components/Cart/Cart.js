import { useContext, useState } from 'react'
import { CartContext } from '../../App'
import { Link } from 'react-router-dom'
import isTouchDevice from '../../utils/isTouchDevice'
import './Cart.css'

export default function Cart() {
  const { state } = useContext(CartContext)
  const [isDropdown, setIsDropdown] = useState(false)
  const { dispatch } = useContext(CartContext)

  return (
    <div
      className="cart"
      onMouseEnter={() => setIsDropdown(true)}
      onMouseLeave={() => setIsDropdown(false)}
    >
      <Link to="/cart" className="cart__link">
        <i className="bx bx-cart bx-md"></i>Cart ({state.products.length})
      </Link>
      {
        /* If isTouchDevice do not show cart dropdown */
        isTouchDevice() || (
          <div
            className={
              isDropdown
                ? 'cart__dropdown cart__dropdown--active'
                : 'cart__dropdown'
            }
          >
            <ul>
              <li onClick={() => dispatch({ type: 'CLEAN_CART' })}>
                Clean Cart
              </li>
              <li>Update Cart</li>
              <li>Access Cart</li>
            </ul>
          </div>
        )
      }
    </div>
  )
}
