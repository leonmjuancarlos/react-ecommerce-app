import styled from 'styled-components'
import './SidebarBox.css'

const SidebarBoxTitle = styled.span`
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

export default function SidebarBox({ title, list }) {
  return (
    <div className="sidebar-box">
      <SidebarBoxTitle>{title}</SidebarBoxTitle>
      {list}
    </div>
  )
}
