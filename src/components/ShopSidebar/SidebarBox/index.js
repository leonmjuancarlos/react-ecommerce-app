import S from './styles'

export default function SidebarBox({ title, content }) {
  return (
    <S.StyledSidebarBox>
      <S.SidebarBoxTitle>{title}</S.SidebarBoxTitle>
      {content}
    </S.StyledSidebarBox>
  )
}
