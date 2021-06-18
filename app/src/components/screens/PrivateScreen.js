import { useState, useEffect } from 'react'
import axios from 'axios'
import './css/PrivateScreen.css'
import './css/CatalogoScreen.css'
const baseUrl = 'http://localhost:5000'
const PrivateScreen = ({ history }) => {
  const [error, setError] = useState('')
  const [privateData, setPrivateData] = useState('')
  /* const logoutHandler = () => {
    window.localStorage.removeItem('authToken')
    window.localStorage.removeItem('SessionData')
    history.push('/')
  } */
  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${window.localStorage.getItem('authToken')}`
        }
      }

      try {
        const { data } = await axios.get(`${baseUrl}/api/private`, config)
        setPrivateData(data.data)
      } catch (error) {
        window.localStorage.removeItem('authToken')
        window.localStorage.removeItem('SessionData')
        setError('Sesion expirada vuelve a ingresar')
        history.push('/login')
      }
    }

    fetchPrivateDate()
  }, [])
  return error
    ? (
      <span className='error-message'>{error}</span>
      )
    : (
      <>
        <main style={{ background: 'green', color: 'white' }}>
          <div className='main__container'> {privateData}
          </div>
        </main>
      </>
      )
}

export default PrivateScreen
