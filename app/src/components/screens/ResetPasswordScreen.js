import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import tech2 from '../../statics/tech-home2.png'
import swal from 'sweetalert2'
const baseUrl = '/api'

const ResetPasswordScreen = ({ history, match }) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const resetPasswordHandler = async (e) => {
    e.preventDefault()

    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    }

    if (password !== confirmPassword) {
      swal.fire({
        title: 'Algo salió mal',
        icon: 'warning',
        text: 'Las contraseñas no coinciden'
      })
    } else {
      try {
        const { data } = await axios.put(
        `${baseUrl}/auth/passwordreset/${match.params.resetToken}`,
        {
          password
        },
        config
        )

        console.log(data)
        swal.fire({
          title: 'Listo',
          icon: 'success',
          text: `${data.data}`
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
                <h1 className='text-center text-white font-bold text-2xl uppercase'>Cambia tu contraseña</h1>
                <form onSubmit={resetPasswordHandler} className='px-8 pt-6 pb-8 mb-4 bg-black rounded'>

                  <div className='mb-4'>
                    <label className='block mb-2 text-sm font-bold text-white'>
                      Escribe tu nueva contraseña:

                    </label>
                    <input
                      className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      type='password'
                      required
                      id='password'
                      autoComplete='true'
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      tabIndex={1}
                      placeholder='******************'
                    />
                  </div>

                  <div className='mb-4'>
                    <label className='block mb-2 text-sm font-bold text-white'>
                      Vuelve a escribir tu nueva contraseña:

                    </label>
                    <input
                      className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      type='password'
                      required
                      id='ConfirmPassword'
                      autoComplete='true'
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
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

export default ResetPasswordScreen
