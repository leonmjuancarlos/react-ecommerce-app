import { useContext } from 'react'
import { CartContext } from '../../App'
import './Counter.css'

export default function Counter({ product, amount, setAmount }) {
  const { dispatch } = useContext(CartContext)
  return (
    <div className="counter">
      <input type="number" value={amount} onChange={() => {}}></input>
      <div className="counter__buttons__wrapper">
        <button
          type="button"
          className="counter__btn"
          onClick={() => {
            setAmount(amount + 1)
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
          className="counter__btn"
          onClick={() => {
            if (amount > 0) {
              setAmount(amount - 1)
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
