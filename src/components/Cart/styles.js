import styled from 'styled-components'
import { Link } from 'react-router-dom'

const S = {}

S.Cart = styled.div`
  display: block;
  width: 105px;
  height: 100%;
`

S.CartLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`

S.CartDropdown = styled.div`
  position: absolute;
  background-color: black;
  color: white;
  top: 100%;
  width: auto;
  overflow: hidden;
  height: auto;
  max-height: ${(p) => (p.isDropdown ? '400px' : '0')};
  transition: max-height 0.6s ease-out;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.25);
`

S.CartDropdownItem = styled.li`
  padding: 20px 30px;
  border: 1px solid rgba(163, 163, 163, 0.5);
  cursor: pointer;

  &:hover {
    background-color: #4747ff;
  }
`

export default S
