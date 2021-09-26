import styled from 'styled-components'

const S = {}

S.StyledSidebarBox = styled.div`
  background-color: aliceblue;
  border: 1px solid rgba(0, 0, 0, 0.125);
`

S.SidebarBoxTitle = styled.span`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  border-radius: 1px;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`

export default S
