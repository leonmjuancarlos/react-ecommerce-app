import { useContext } from 'react'
import { CartContext } from '../../App'
import './Counter.css'

export default function Counter({
  product,
  amount,
  setAmount,
  totalPrice,
  setTotalPrice,
}) {
  const { dispatch } = useContext(CartContext)
  return (
    <div className="counter">
      <input type="number" value={amount} onChange={() => {}}></input>
      <div className="counter-buttons-wrapper">
        <button
          type="button"
          className="counter-btn"
          onClick={() => {
            setAmount(amount + 1)
            setTotalPrice(totalPrice + product.price)
            dispatch({
              type: 'INCREMENT_TOTAL_PRICE',
              price: product.price,
            })
          }}
        >
          +
        </button>
        <button
          type="button"
          className="counter-btn"
          onClick={() => {
            if (amount > 0) {
              setAmount(amount - 1)
              setTotalPrice(totalPrice - product.price)
              dispatch({
                type: 'DECREMENT_TOTAL_PRICE',
                price: product.price,
              })
            }
          }}
        >
          -
        </button>
      </div>
    </div>
  )
}
