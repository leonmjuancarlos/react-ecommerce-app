import Cart from '../Cart'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          <span>E-comerce</span>
        </Link>
        <Cart />
      </div>
    </div>
  )
}
