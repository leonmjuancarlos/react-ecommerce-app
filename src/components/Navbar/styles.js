import styled from 'styled-components'

export const S = {}

S.Navbar = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.headerBackground || '#343a40'};
  margin-bottom: 20px;
  box-shadow: 0 1px 10px #343a40;
  position: sticky;
  top: 0;
  z-index: 1;
`

S.Container = styled.div`
  width: 82%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

S.Title = styled.span`
  color: #fff;
  display: block;
  font-size: 1.5rem;
`

export default S
