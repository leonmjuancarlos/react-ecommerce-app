import './Shop.css'

import { useCallback, useReducer } from 'react'

import Products from '../../components/Products'
import ShopSidebar from '../../components/ShopSidebar'
import { shopReducer } from '../../reducers/shop.reducer'

export default function Shop({ phones, getBrands }) {
  const [state, dispatch] = useReducer(shopReducer, {
    page: 1,
    brands: [],
    searchText: '',
  })

  const handlePageClick = useCallback(
    (e) => {
      if (e.target.textContent !== state.page)
        dispatch({
          type: 'CHANGE_PAGE',
          page: Number.parseInt(e.target.textContent),
        })
      window.scrollTo(0, 0)
    },
    [state.page]
  )

  const brandFilter = useCallback(() => {
    if (state.brands.length !== 0)
      return phones.filter((el) =>
        state.searchText === ''
          ? state.brands.includes(el.brand)
          : state.brands.includes(el.brand) &&
            el.title.toLowerCase().includes(state.searchText)
      )
    // If there is no brand in filter
    else
      return state.searchText === ''
        ? phones
        : phones.filter((el) =>
            el.title.toLowerCase().includes(state.searchText)
          )
  }, [state.brands, state.searchText])

  return (
    <div className="shop__wrapper">
      <ShopSidebar phones={phones} shopReducer={{ state, dispatch }} />
      <Products
        phones={brandFilter()}
        handlePageClick={handlePageClick}
        page={state.page}
      />
    </div>
  )
}
