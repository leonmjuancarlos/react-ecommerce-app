import { useContext, useState } from 'react'

import { CartContext } from '../../App'
import isTouchDevice from '../../utils/isTouchDevice'
import imageToShow from './animations'
import S from './styles'

export default function Product({ data }) {
  const [isShown, setIsShown] = useState(false)
  const [imgToShow, setImgToShow] = useState(0)
  const { dispatch } = useContext(CartContext)

  return (
    <S.ProductWrapper
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <S.ProductImgWrapper>
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
      </S.ProductImgWrapper>
      <S.ProductInfoWrapper>
        <S.ProductTitle to={`/products/${data.id}`}>
          {data.title}
        </S.ProductTitle>
        <S.ProductPrice>
          {`$${Math.round(data.price * 100) / 100}`}
        </S.ProductPrice>
        <S.ProductDescription>{data.description}</S.ProductDescription>
        <S.AddBtn
          isShown={isShown}
          onClick={() => {
            dispatch({
              type: 'ADD_PRODUCT_TO_CART',
              product: data,
              price: data.price,
            })
          }}
        >
          Add to cart
        </S.AddBtn>
      </S.ProductInfoWrapper>
    </S.ProductWrapper>
  )
}
