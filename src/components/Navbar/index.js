import { Link } from 'react-router-dom'

import Cart from '../Cart'
import S from './styles'

export default function Navbar() {
  return (
    <S.Navbar>
      <S.Container>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          <S.Title>E-commerce</S.Title>
        </Link>
        <Cart />
      </S.Container>
    </S.Navbar>
  )
}
