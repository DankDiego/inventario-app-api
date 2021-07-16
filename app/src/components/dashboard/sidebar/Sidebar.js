import './Sidebar.css'
import React from 'react'
import logo from '../../../statics/logo.svg'
import { Link } from 'react-router-dom'
const Sidebar = ({ sidebarOpen, closeSidebar, history }) => {
  const logoutSesion = () => {
    window.localStorage.removeItem('authToken')
    window.localStorage.removeItem('SessionData')
  }
  return (
    <div className={sidebarOpen ? 'sidebar_responsive' : ''} id='sidebar'>
      <div className='sidebar__title'>
        <div className='sidebar__img'>
          <img src={logo} alt='logo' />
          <h1>Powered by React</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className='fa fa-times'
          id='sidebarIcon'
          aria-hidden='true'
        />
      </div>

      <div className='sidebar__menu'>
        <div className='sidebar__link active_menu_link'>
          <i className='fa fa-home' />
          <Link to='/dashboard'>DashBoard</Link>
        </div>

        <h2><i className='fa fa-shopping-bag' /> Administrar Productos</h2>

        <div className='sidebar__link'>
          <i className='fa fa-plus' />
          <Link to='/dashboard/crearproducto'>Registrar Producto</Link>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-plus' />
          <Link to='/dashboard/listaproducto'>Lista de Producto</Link>
        </div>

        <h2><i className='fas fa-users-cog' /> Administrar Usuarios</h2>
        <div className='sidebar__link'>
          <i className='fa fa-user-plus' />
          <Link to='/dashboard'>Registrar Usuario</Link>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-users' />
          <Link to='/dashboard'>Lista de Usuarios</Link>
        </div>
        <h2><i className='fas fa-chart-line' /> Reportes</h2>
        <div className='sidebar__link'>
          <i className='fas fa-money-bill-wave' />
          <Link to='/dashboard'>Productos mas vendidos</Link>
        </div>

        <div className='sidebar__logout'>
          <i className='fa fa-power-off' />
          {/* <button onClick={logoutSesion}>Cerrar Session</button> */}
          <Link onClick={logoutSesion} to='/'>Cerrar Session</Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
