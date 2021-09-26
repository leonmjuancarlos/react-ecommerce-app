import './SidebarBox.css'

import styled from 'styled-components'

const StyledTitle = styled.span`
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

export default function SidebarBox({ title, content }) {
  return (
    <div className="sidebar__box">
      <StyledTitle>{title}</StyledTitle>
      {content}
    </div>
  )
}
