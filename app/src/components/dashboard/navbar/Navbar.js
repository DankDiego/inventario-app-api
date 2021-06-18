import './Navbar.css'
import avatar from '../../../statics/logo.svg'

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className='navbar'>
      <div className='nav_icon' onClick={() => openSidebar()}>
        <i className='fa fa-bars' aria-hidden='true' />
      </div>
      <div className='navbar__left'>
        <a href='/'>Inicio</a>
        <a href='/catalogo'>Catalogo</a>
      </div>
      <div className='navbar__right'>
        <a href='#'>
          <i className='fa fa-search' aria-hidden='true' />
        </a>
        <a href='#'>
          <i className='fa fa-clock' aria-hidden='true' />
        </a>
        <a href='#!'>
          <img width='30' src={avatar} alt='avatar' />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
