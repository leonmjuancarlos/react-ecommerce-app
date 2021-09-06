import { useContext, useState } from 'react'
import { CartContext } from '../../App'
import { Link } from 'react-router-dom'
import './Cart.css'
import isTouchDevice from '../../utils/isTouchDevice'

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
      <Link to="/cart" className="cart-link">
        <i className="bx bx-cart bx-md"></i>Cart ({state.products.length})
      </Link>
      {isTouchDevice() || (
        <div
          className={
            isDropdown ? 'cart-dropdown cart-dropdown--active' : 'cart-dropdown'
          }
        >
          <ul>
            <li onClick={() => dispatch({ type: 'CLEAN_CART' })}>Clean Cart</li>
            <li>Update Cart</li>
            <li>Access Cart</li>
          </ul>
        </div>
      )}
    </div>
  )
}
