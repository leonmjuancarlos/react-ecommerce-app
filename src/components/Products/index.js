import './Products.css'

import { useCallback } from 'react'
import styled from 'styled-components'

import Product from '../Product'

const PRODUCTS_PER_PAGE = 12

const S = {}

S.NothingFound = styled.span`
  display: block;
  position: absolute;
  top: 2rem;
  font-size: 1.4rem;
  color: black;
  margin: 1rem 0 0 3rem;
`

export default function Products({ phones, handlePageClick, page }) {
  const pagination = useCallback(() => {
    const chunk = (arr, size) =>
      Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
      )
    return chunk(phones, PRODUCTS_PER_PAGE)
  }, [phones])

  return (
    <div className="products">
      <div className="products__grid">
        {phones.length ? (
          pagination()[page - 1].map((el) => (
            <Product key={el.title} data={el} />
          ))
        ) : (
          <S.NothingFound>Nothing found...</S.NothingFound>
        )}
      </div>
      <div className="pagination">
        {phones.length > 0 &&
          pagination().map((el, i) => (
            <div
              onClick={handlePageClick}
              className="pagination__item"
              key={i}
              style={{
                backgroundColor:
                  Number.parseInt(page) === i + 1 ? '#4747ff' : 'aliceblue',
                color: Number.parseInt(page) === i + 1 ? 'white' : 'black',
              }}
            >
              {i + 1}
            </div>
          ))}
      </div>
    </div>
  )
}
