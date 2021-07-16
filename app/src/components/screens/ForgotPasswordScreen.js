import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert2'
import { Link } from 'react-router-dom'
const baseUrl = '/api'
const ForgotPasswordScreen = () => {
  const tech2 = 'https://res.cloudinary.com/dsulcam/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1624954179/tech-home2_hmkvwm.jpg'
  const [email, setEmail] = useState('')
  /* const [error, setError] = useState('')
  const [success, setSuccess] = useState('') */

  const forgotPasswordHandler = async (e) => {
    e.preventDefault()

    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const { data } = await axios.post(
        `${baseUrl}/auth/forgotpassword`,
        { email },
        config
      )
      console.log(data)
      swal.fire({
        title: `${data.data}`,
        icon: 'success',
        text: 'Si no te aparece recuerda revisar tu carpeta de spam'
      })
    } catch (error) {
      /* setError(error.response.data.error) */
      swal.fire({
        title: 'Algo salió mal',
        icon: 'warning',
        text: `${error.response.data.error}`
      })
    }
  }

  return (
    <>
      <div id='section' className='location__header' />
      <div id='section' className='location__header' />
      <div classNameName='container font-mono bg-gray-400'>

        <div className='container mx-auto'>
          <div className='flex justify-center px-6 my-12'>

            <div className='w-full xl:w-3/4 lg:w-11/12 flex'>

              <div className='w-full h-auto lg:w-1/2 bg-black p-5 rounded-l-lg lg:rounded-l-lg'>
                <h1 class='pt-4 mb-2 text-2xl text-white '>Olvidaste tu contraseña?</h1>
                <p class='mb-4 text-sm text-white'>
                  Entendemos, esas cosas pasan. solo debes ingresar tu E-mail y te enviaremos un link para cambiar tu contraseña!
                </p>
                <form onSubmit={forgotPasswordHandler} className='px-8 pt-6 pb-8 mb-4 bg-black rounded'>

                  <div className='mb-4'>
                    <label className='block mb-2 text-sm font-bold text-white' for='username'>
                      Ingresa tu E-mail
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

                  <div className='mb-6 text-center'>
                    <button
                      className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline'
                      type='submit'
                    >
                      Cambiar contraseña
                    </button>
                  </div>
                  <hr className='mb-6 border-t' />
                  <div className='text-center'>
                    <Link to='/login' className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'>
                      Ya tienes una cuenta?, Inicia Sesion
                    </Link>
                  </div>
                  <div className='text-center'>
                    <Link to='/register' className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'>
                      Crear una nueva cuenta
                    </Link>
                  </div>
                </form>

              </div>
              <div
                className='w-full h-auto bg-black hidden lg:block lg:w-1/2 bg-cover rounded-r-lg'
                style={{
                  backgroundImage: `url(${tech2})`
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPasswordScreen
