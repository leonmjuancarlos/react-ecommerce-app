import { useCallback, useReducer } from 'react'
import { getBrands, phones } from '../../data/phones'
import Products from '../Products/Products'
import SidebarBox from '../SidebarBox/SidebarBox'
import { shopReducer } from '../../reducers/shop.reducer'
import './Shop.css'

export default function Shop() {
  const [state, dispatch] = useReducer(shopReducer, {
    page: 1,
    brands: [],
  })

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
    <div className="shop__wrapper">
      <div className="shop__sidebar">
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