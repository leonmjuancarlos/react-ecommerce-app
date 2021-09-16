import styled from 'styled-components'
import isTouchDevice from '../../utils/isTouchDevice'

const S = {}

S.ProductWrapper = styled.div`
  overflow: hidden;
  background-color: white;
  border: 1px dashed black;
  width: 100%;
  height: 100%;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.25);
  }
`

S.ProductImgWrapper = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: '';
    display: block;
    border-bottom: 1px dashed black;
    position: absolute;
    width: 100%;
    top: 340px;
  }
`

S.ProductImg = styled.img`
  width: 80%;
  height: 90%;
`

S.ProductInfoWrapper = styled.div`
  width: 100%;
  height: 40%;
  padding: 15px;
`

S.ProductTitle = styled.a`
  font-size: 0.95rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

S.ProductPrice = styled.span`
  display: block;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 15px 0;
`

S.ProductDescription = styled.p`
  display: block;
  font-size: 0.85rem;
`

S.AddBtn = styled.button`
  display: block;
  width: 50%;
  height: 45px;
  background-color: #4747ff;
  color: white;
  opacity: ${(p) => (isTouchDevice() ? '1' : p.isShown ? '1' : '0')};
  margin: auto;
  margin-top: 15px;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  transition: all 0.3s;
`

export default S
