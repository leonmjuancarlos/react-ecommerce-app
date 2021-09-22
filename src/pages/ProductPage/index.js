import { useState, useContext } from 'react'
import { CartContext } from '../../App'
import { useParams } from 'react-router'
import capitalize from '../../utils/capitalize'
import isTouchDevice from '../../utils/isTouchDevice'
import imageToShow from '../../components/Product/animations'
import S from './styles'
import S2 from '../../components/Product/styles'

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
        <S2.AddBtn
          isShown={true}
          onClick={() => {
            dispatch({
              type: 'ADD_PRODUCT_TO_CART',
              product: data,
              price: data.price,
            })
          }}
        >
          Add to cart
        </S2.AddBtn>
      </S.ProductInfoContainer>
    </S.MainProductContainer>
  )
}
