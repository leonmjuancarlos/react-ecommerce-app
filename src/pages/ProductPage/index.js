import styled from 'styled-components'
import { useState, useContext } from 'react'
import { CartContext } from '../../App'
import { useParams } from 'react-router'
import capitalize from '../../utils/capitalize'
import isTouchDevice from '../../utils/isTouchDevice'
import imageToShow from '../../components/Product/animations'
import { S as cc } from '../../components/Product/styles'

const S = {}

S.MainProductContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  border: 1px solid black;
`
S.ImageWrapper = styled.div`
  flex: 0 1 35%;
  display: flex;
  flex-flow: column nowrap;
`
S.ProductImg = styled.img``

S.ProductInfoContainer = styled.div`
  flex: 0 1 65%;
  flex-flow: column nowrap;
  border-left: 1px solid black;
  padding: 2rem 3.5rem;
`

S.ProductTitle = styled.h2`
  display: block;
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
`

S.ProductPrice = styled.span`
  display: block;
  font-size: 1.8rem;
  color: #ffc107;
  margin: 0 0 1.3rem 0;
`

S.ProductPropertyWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 0.3rem;
  margin-bottom: 1rem;
  margin-top: 0;
`
S.ProductPropertyTitle = styled.span`
  display: block;
  font-weight: 500;
`
S.ProductPropertyDescription = styled.p`
  display: block;
`

export default function ProductPage({ phones }) {
  const { productId } = useParams()
  const [imgToShow, setImgToShow] = useState(0)
  const { dispatch } = useContext(CartContext)

  const data = phones.find((phone) => phone.id === Number.parseInt(productId))
  const infoNotToShow = ['title', 'category', 'images', 'id']
  return (
    <S.MainProductContainer>
      <S.ImageWrapper>
        <S.ProductImg
          src={data.images[imgToShow]}
          onMouseMove={(e) => {
            if (!isTouchDevice()) {
              if (imageToShow(e, data.images.length) === -1) setImgToShow(0)
              else setImgToShow(imageToShow(e, data.images.length))
            }
          }}
          onMouseOut={() => setImgToShow(0)}
        />
      </S.ImageWrapper>
      <S.ProductInfoContainer>
        <S.ProductTitle>{data.title}</S.ProductTitle>
        <S.ProductPrice>{`$${
          Math.round(data.price * 100) / 100
        }`}</S.ProductPrice>
        {Object.entries(data).map(
          ([k, v]) =>
            infoNotToShow.includes(k) || (
              <S.ProductPropertyWrapper key={k}>
                <S.ProductPropertyTitle>{capitalize(k)}</S.ProductPropertyTitle>
                <S.ProductPropertyDescription>
                  {capitalize(v)}
                </S.ProductPropertyDescription>
              </S.ProductPropertyWrapper>
            )
        )}
        <cc.AddBtn
          onClick={() => {
            dispatch({
              type: 'ADD_PRODUCT_TO_CART',
              product: data,
              price: data.price,
            })
          }}
        >
          Add to cart
        </cc.AddBtn>
      </S.ProductInfoContainer>
    </S.MainProductContainer>
  )
}
