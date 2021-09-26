import './Shop.css'

import { useCallback, useReducer } from 'react'

import Products from '../../components/Products'
import ShopSidebar from '../../components/ShopSidebar'
import { shopReducer } from '../../reducers/shop.reducer'

const TEST_PHONE = [
  {
    title: 'Apple iPhone 7 Plus 32 GB (Apple Türkiye Garantili)',
    category: 'phone',
    images: [
      'https://productimages.hepsiburada.net/s/18/280-413/9801258663986.jpg?v1',
      'https://productimages.hepsiburada.net/s/18/280-413/9801258696754.jpg?v1',
      'https://productimages.hepsiburada.net/s/18/280-413/9801258729522.jpg?v1',
      'https://productimages.hepsiburada.net/s/18/280-413/9801258762290.jpg?v1',
    ],
    brand: 'apple',
    price: 4241.499828399639,
    cpu: '1.3GHz Apple A6',
    camera: '8mp (3264x2448)',
    size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
    weight: '132 grams (4.7 ounces) with battery',
    display: '4.0 326 pixel density',
    battery: '1480 mAh',
    memory: '16GB, 32GB and RAM 1 GB',
    id: 0,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
  },
]

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
        phones={brandFilter() || TEST_PHONE}
        handlePageClick={handlePageClick}
        page={state.page}
      />
    </div>
  )
}
