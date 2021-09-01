import { useCallback, useReducer } from 'react'
import './Shop.css'
import { getBrands, phones } from '../../data/phones'
import Products from '../Products/Products'
import SidebarBox from '../SidebarBox/SidebarBox'

const initialState = {
  page: 1,
  brands: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.page,
      }
    case 'BRANDS_FILTER':
      return {
        ...state,
        brands: action.brands,
        page: 1,
      }
    default:
      return state
  }
}

export default function Shop() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handlePageClick = useCallback(
    (e) => {
      if (e.target.textContent !== state.page)
        dispatch({
          type: 'CHANGE_PAGE',
          page: Number.parseInt(e.target.textContent),
        })
    },
    [state.page]
  )
  const handleChecked = useCallback(
    (e) => {
      const brand = e.target.parentElement.textContent.split(' ')[0]
      const checked = e.target.checked
      const tmpBrands = [...state.brands]

      if (checked)
        dispatch({
          type: 'BRANDS_FILTER',
          brands: state.brands.concat([brand]),
        })
      else {
        tmpBrands.splice(tmpBrands.indexOf(brand), 1)
        dispatch({
          type: 'BRANDS_FILTER',
          brands: tmpBrands,
        })
      }
    },
    [state.brands]
  )
  const brandFilter = useCallback(() => {
    if (state.brands.length !== 0) {
      return phones.filter((el) => state.brands.includes(el.brand))
    } else return phones
  }, [state.brands])

  return (
    <div className="shop-wrapper">
      <div className="shop-sidebar">
        <SidebarBox
          title={'Brands'}
          list={Object.entries(getBrands()).map(([brand, repeated]) => (
            <li key={brand}>
              <label>
                <input type="checkbox" onClick={handleChecked} />
                {brand} ({repeated})
              </label>
            </li>
          ))}
        />
      </div>
      <Products
        phones={brandFilter()}
        handlePageClick={handlePageClick}
        page={state.page}
      />
    </div>
  )
}
