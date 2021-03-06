import { useState, useEffect } from 'react'
import swal from 'sweetalert2'
import axios from 'axios'
import { Link } from 'react-router-dom'
const baseUrl = '/api'
const LoginScreen = ({ history }) => {
  const tech2 = 'https://res.cloudinary.com/dsulcam/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624954179/tech-home2_hmkvwm.jpg'
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
    <>
      <div id='section' className='location__header' />
      <div id='section' className='location__header' />
      <div className='container font-mono '>

        <div className='container mx-auto'>
          <div className='flex justify-center px-6 my-12'>

            <div className='w-full xl:w-3/4 lg:w-11/12 flex'>

              <div
                className='w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg'
                style={{
                  backgroundImage: `url(${tech2})`
                }}
              />

              <div className='w-full h-auto lg:w-1/2 bg-black p-5 rounded-r-lg lg:rounded-l-none'>
                <h1 className='text-center text-white font-bold text-2xl uppercase'>Inicia Sesion</h1>
                <form onSubmit={loginHandler} className='px-8 pt-6 pb-8 mb-4 bg-black rounded'>

                  <div className='mb-4'>
                    <label className='block mb-2 text-sm font-bold text-white'>
                      E-mail
                    </label>
                    <input
                      className='w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
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
                    <label className='block mb-2 text-sm font-bold text-white'>
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
    </>
  )
}

export default LoginScreen
