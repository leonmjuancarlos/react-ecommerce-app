import { useContext } from 'react'
import { CartContext } from '../../App'
import './Counter.css'

export default function Counter({ product, counterHook }) {
  const { count, incrementCounter, decrementCounter } = counterHook

  const { dispatch } = useContext(CartContext)
  return (
    <div className="counter">
      <input type="number" value={count} onChange={() => {}}></input>
      <div className="counter__buttons__wrapper">
        <button
          type="button"
          className="counter__btn"
          onClick={() => {
            incrementCounter()
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
            if (count > 0) {
              decrementCounter()
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
