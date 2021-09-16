import { useContext, useState } from 'react'
import { CartContext } from '../../App'
import S from './styles'

export default function Product({ data }) {
  const [isShown, setIsShown] = useState(false)
  const { dispatch } = useContext(CartContext)

  return (
    <S.ProductWrapper
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <S.ProductImgWrapper>
        <S.ProductImg src={data.images[0]} />
      </S.ProductImgWrapper>
      <S.ProductInfoWrapper>
        <S.ProductTitle href="#">{data.title}</S.ProductTitle>
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
