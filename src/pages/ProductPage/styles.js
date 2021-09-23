import styled from 'styled-components'

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

export default S
