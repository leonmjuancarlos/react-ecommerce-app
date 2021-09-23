import { useContext, useState } from 'react'

import { CartContext } from '../../App'
import isTouchDevice from '../../utils/isTouchDevice'
import S from './styles'

export default function Cart() {
  const { state } = useContext(CartContext)
  const [isDropdown, setIsDropdown] = useState(false)
  const { dispatch } = useContext(CartContext)

  return (
    <S.Cart
      onMouseEnter={() => setIsDropdown(true)}
      onMouseLeave={() => setIsDropdown(false)}
    >
      <S.CartLink to="/cart">
        <i className="bx bx-cart bx-md"></i>Cart ({state.products.length})
      </S.CartLink>
      {
        /* If isTouchDevice do not show cart dropdown */
        isTouchDevice() || (
          <S.CartDropdown isDropdown={isDropdown}>
            <ul>
              <S.CartDropdownItem
                onClick={() => dispatch({ type: 'CLEAN_CART' })}
              >
                Clean Cart
              </S.CartDropdownItem>
              <S.CartDropdownItem>Update Cart</S.CartDropdownItem>
              <S.CartDropdownItem>Access Cart</S.CartDropdownItem>
            </ul>
          </S.CartDropdown>
        )
      }
    </S.Cart>
  )
}
