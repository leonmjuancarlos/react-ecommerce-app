/* <div className="shop__sidebar">
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
      </div> */

import { useCallback } from 'react'
import styled from 'styled-components'

import { getBrands } from '../../data/phones'
import SidebarBox from './SidebarBox'

const S = {}

S.ShopSidebar = styled.div`
  background-color: white;
  display: flex;
  flex-flow: column nowrap;
  row-gap: 1.5rem;

  li {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 20px;

    label {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      input[type='checkbox'] {
        width: 20px;
        height: 20px;
        margin-right: 15px;
        cursor: pointer;
      }
    }
  }
`

export default function ShopSidebar({ phones, shopReducer }) {
  const { state, dispatch } = shopReducer
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

  const handleSearchTextChange = useCallback(
    (e) => {
      dispatch({
        type: 'SEARCH_FILTER',
        searchText: e.target.value,
      })
    },
    [state.searchText]
  )

  return (
    <S.ShopSidebar>
      <SidebarBox
        title={'Search'}
        content={<input type="text" onChange={handleSearchTextChange}></input>}
      />
      <SidebarBox
        title={'Brands'}
        content={Object.entries(getBrands(phones)).map(([brand, repeated]) => (
          <li key={brand}>
            <label>
              <input type="checkbox" onClick={handleChecked} />
              {brand} ({repeated})
            </label>
          </li>
        ))}
      />
    </S.ShopSidebar>
  )
}
