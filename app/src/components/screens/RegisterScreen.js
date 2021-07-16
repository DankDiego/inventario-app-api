import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert2'
import { Link } from 'react-router-dom'
const baseUrl = '/api'
const RegisterScreen = ({ history }) => {
  const tech2 = 'https://res.cloudinary.com/dsulcam/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624954179/tech-home2_hmkvwm.jpg'
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  /* const [error, setError] = useState('') */

  const registerHandler = async (e) => {
    e.preventDefault()

    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    }

    if (password !== confirmpassword) {
      setPassword('')
      setConfirmPassword('')
      swal.fire({
        title: 'Las Contraseñas no Coinciden',
        icon: 'warning',
        text: 'Revisa tu contraseña y vuelvelo a intentar'
      })
    } else {
      try {
        const { data } = await axios.post(
        `${baseUrl}/auth/register`,
        {
          username,
          email,
          password
        },
        config
        )
        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        console.log(data)
        swal.fire({
          title: 'Registrado Correctamente',
          icon: 'success',
          text: `Ya puedes iniciar sesion, con tu correo:  ${data.email}`
        })
      } catch (error) {
        swal.fire({
          title: 'Algo salió mal',
          icon: 'warning',
          text: `${error.response.data.error}`
        })
      }
    }
  }

  return (
    <>
      <div id='section' className='location__header' />

      <div classNameName='container font-mono bg-gray-400'>

        <div className='container mx-auto'>
          <div className='flex justify-center px-6 my-12'>

            <div className='w-full xl:w-3/4 lg:w-11/12 flex'>

              <div
                className='w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg'
                style={{
                  backgroundImage: `url(${tech2})`
                }}
              />

              <div className='w-full h-auto lg:w-1/2 bg-black p-5 rounded-r-lg lg:rounded-l-none'>
                <h1 class='text-center text-white font-bold text-2xl uppercase'>Registrate</h1>
                <form onSubmit={registerHandler} className='px-8 pt-6 pb-8 mb-4 bg-black rounded'>

                  <div className='mb-4'>
                    <label className='block mb-2 text-sm font-bold text-white' for='username'>
                      Nombres:
                    </label>
                    <input
                      className='w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      type='text'
                      required
                      id='name'
                      placeholder='Fulano Mengano'
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      tabIndex={1}
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-2 text-sm font-bold text-white' for='username'>
                      E-mail:
                    </label>
                    <input
                      className='w-full px-3 py-2 text-sm leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      type='email'
                      required
                      id='email'
                      placeholder='ejemplo@gmail.com'
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      tabIndex={2}
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-2 text-sm font-bold text-white' for='password'>
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
                      tabIndex={3}
                      placeholder='******************'
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-2 text-sm font-bold text-white' for='password'>
                      Comfirma tu Password:
                    </label>
                    <input
                      className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      type='password'
                      required
                      id='password'
                      autoComplete='true'
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmpassword}
                      tabIndex={4}
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
                    <Link to='/login' className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'>
                      Ya tines una cuenta?, Inicia sesion
                    </Link>
                  </div>
                  <div className='text-center'>
                    <Link to='/forgotpassword' className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'>
                      Olvidaste tu contraseña?
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

export default RegisterScreen
