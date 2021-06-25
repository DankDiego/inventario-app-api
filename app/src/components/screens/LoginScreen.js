import { useState, useEffect } from 'react'
import swal from 'sweetalert2'
import axios from 'axios'
import { Link } from 'react-router-dom'
import tech2 from '../../statics/tech-home2.png'
const baseUrl = '/api'
const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  /* const [error, setError] = useState('') */

  useEffect(() => {
    if (window.localStorage.getItem('authToken')) {
      history.push('/dashboard')
    }
  }, [history])

  const loginHandler = async (e) => {
    e.preventDefault()

    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const { data } = await axios.post(
        `${baseUrl}/auth/login`,
        { email, password },
        config
      )
      const SessionData = {
        nombre: data.nombre,
        correo: data.email
      }
      window.localStorage.setItem('authToken', data.token)
      window.localStorage.setItem('SessionData', JSON.stringify(SessionData))
      history.push('/dashboard')
    } catch (error) {
      swal.fire({
        title: 'Algo salió mal',
        icon: 'warning',
        text: `${error.response.data.error}`
      })
      /* setError(error.response.data.error)
      setTimeout(() => {
        setError('')
      }, 5000) */
    }
  }

  return (
    <div classNameName='font-mono bg-gray-400'>

      <div className='container mx-auto'>
        <div className='flex justify-center px-6 my-12'>

          <div className='w-full xl:w-3/4 lg:w-11/12 flex'>

            <div
              className='w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg'
              style={{
                backgroundImage: `url(${tech2})`
              }}
            />

            <div className='w-full h-auto lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none'>
              <h3 className='pt-4 text-2xl text-center'>Inicia Sesion!</h3>
              <form onSubmit={loginHandler} className='px-8 pt-6 pb-8 mb-4 bg-white rounded'>

                <div className='mb-4'>
                  <label className='block mb-2 text-sm font-bold text-gray-700' for='username'>
                    E-mail
                  </label>
                  <input
                    className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    type='email'
                    required
                    id='email'
                    placeholder='ejemplo@gmail.com'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    tabIndex={1}
                  />
                </div>
                <div className='mb-4'>
                  <label className='block mb-2 text-sm font-bold text-gray-700' for='password'>
                    Password:{' '}

                  </label>
                  <input
                    className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    type='password'
                    required
                    id='password'
                    autoComplete='true'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    tabIndex={2}
                    placeholder='******************'
                  />
                </div>
                <div className='mb-6 text-center'>
                  <button
                    className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline'
                    type='submit'
                  >
                    Entrar
                  </button>
                </div>
                <hr className='mb-6 border-t' />
                <div className='text-center'>
                  <Link to='/forgotpassword' className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'>
                    Olvidaste tu contraseña?
                  </Link>
                </div>
                <div className='text-center'>
                  <Link to='/register' className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'>
                    Crear una nueva cuenta
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
