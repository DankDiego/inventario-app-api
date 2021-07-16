import './Navbar.css'
import React from 'react'
const NavbarUser = () => {
  return (
    <div className='gaa'>
      <nav className='navbar'>

        <div className='navbar__left'>
          <a href='/'>Inicio</a>
          <a href='/catalogo'>Catalogo</a>

        </div>
        <div className='navbar__right'>
          <a href='/login'>
            <i className='fas fa-sign-in-alt' aria-hidden='true' />
          </a>

        </div>
      </nav>
    </div>
  )
}

export default NavbarUser
