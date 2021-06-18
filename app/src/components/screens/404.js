import { Component } from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './css/404.css'
class NotFoundScreen extends Component {
  render () {
    return (
      <div className='hero-image-404'>
        <div className='hero-text-404'>
          <h1 className='hero-h1-404'>Error 404</h1>
          <h3>Pagina no encontrada</h3>
          <Button size='sm' variant='dark' as={NavLink} to='/'>Volver al Inicio</Button>
        </div>
      </div>

    )
  }
}

export default NotFoundScreen
