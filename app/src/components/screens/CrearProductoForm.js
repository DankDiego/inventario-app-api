import React from 'react'
import { useForm } from 'react-hook-form'
import { saveProducto } from '../services/ProductoService'

const CrearProductoForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data, e) => {
    saveProducto(data)
    e.target.reset()
    e.target.reset()
    e.target.reset()
  }
  return (
    <main>

      <div className='main__container'>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex items-center justify-center'>
            <div className='w-full md:w-flex sm:w-flex rounded-xl '>
              <div className='flex flex-col'>
                <div id='header' className='flex flex-col items-center justify-center text-black py-4'>
                  <div className='text-center uppercase text-2xl'>Registro de Producto</div>

                </div>

                <div id='converters-area' className='px-4 py-5'>
                  <div className='flex flex-col text-black'>

                    <div className='flex items-center justify-between mb-5'>
                      <div className='flex flex-col  w-3/6 px-2'>
                        <label className='mb-1'>Producto</label>
                        {errors.nombreproducto && <p className='text-red-600'>{errors.nombreproducto.message}</p>}
                        <input
                          placeholder='nombre'
                          className='py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600'
                          type='text'
                          {...register('nombreproducto', {
                            required: '*Este campo es requerido',
                            minLength: {
                              value: 3,
                              message: 'Minimo 3 caracteres'
                            },
                            maxLength: {
                              value: 20,
                              message: 'Maximo de 20 caracteres'
                            }
                          })}
                        />

                      </div>
                      <div className='flex flex-col w-3/6 px-2'>
                        <label className='mb-1'>Fabricante</label>
                        {errors.fabricante && <p className='text-red-600'>{errors.fabricante.message}</p>}
                        <input
                          placeholder='fabricante'
                          className='py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600'
                          type='text'
                          {...register('fabricante', {
                            required: '*Este campo es requerido',
                            minLength: {
                              value: 3,
                              message: 'Minimo 3 caracteres'
                            },
                            maxLength: {
                              value: 20,
                              message: 'Maximo de 20 caracteres'
                            }
                          })
                          }
                        />
                      </div>
                    </div>

                    <div className='flex items-center mb-5'>
                      <div className='flex flex-col  w-3/6 px-2'>
                        <label className='mb-1'>Tipo</label>
                        {errors.tipo && <p className='text-red-600'>{errors.tipo.message}</p>}
                        <input
                          placeholder='tipo'
                          className='py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600'
                          type='text'
                          {...register('tipo', {
                            required: '*Este campo es requerido',
                            minLength: {
                              value: 3,
                              message: 'Minimo 3 caracteres'
                            },
                            maxLength: {
                              value: 20,
                              message: 'Maximo de 20 caracteres'
                            }
                          })}
                        />
                      </div>
                      <div className='flex flex-col  w-2/6 px-2'>
                        <label className='mb-1'>Precio</label>
                        {errors.precioprod && <p className='text-red-600'>{errors.precioprod.message}</p>}
                        {errors.precioprod && errors.precioprod.type === 'positiveNumber' && (
                          <p className='text-red-600'>*El precio no puede ser menor a 1</p>
                        )}
                        {errors.precioprod && errors.precioprod.type === 'lessThanHundred' && (
                          <p className='text-red-600'>*El precio no puede ser mayor a 10000</p>
                        )}
                        <input
                          placeholder='precio'
                          className='py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600'
                          type='number'
                          {...register('precioprod', {
                            required: '*Este campo es requerido',
                            validate: {
                              positiveNumber: (value) => parseFloat(value) > 0,
                              lessThanHundred: (value) => parseFloat(value) < 10001
                            }
                          })}
                        />
                      </div>
                      <div className='flex flex-col  w-1/6 px-2'>
                        <label className='mb-1'>Cantidad</label>
                        {errors.cantidadprod && <p className='text-red-600'>{errors.cantidadprod.message}</p>}
                        {errors.cantidadprod && errors.cantidadprod.type === 'mayorstok' && (
                          <p className='text-red-600'>*La cantidad debe ser mayor igual a 0</p>
                        )}
                        {errors.cantidadprod && errors.cantidadprod.type === 'menorstok' && (
                          <p className='text-red-600'>*No puedes tener mas de 9999 productos</p>
                        )}

                        <input
                          placeholder='0~9999'
                          className='py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600'
                          type='number'
                          {...register('cantidadprod', {
                            required: '*Este campo es requerido',
                            validate: {
                              mayorstok: (value) => parseFloat(value) > -1,
                              menorstok: (value) => parseFloat(value) < 9999
                            }
                          })}
                        />
                      </div>
                    </div>

                    <div className='flex items-center justify-between mb-5'>
                      <div className='flex flex-col  w-3/6 px-2'>
                        <label className='mb-1'>Codigo</label>
                        {errors.codigoprod && <p className='text-red-600'>{errors.codigoprod.message}</p>}
                        <input
                          placeholder='sm0884a5'
                          className='py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600'
                          type='text'
                          {...register('codigoprod', {
                            required: '*Este campo es requerido',
                            minLength: {
                              value: 8,
                              message: 'Minimo 8 caracteres'
                            },
                            maxLength: {
                              value: 12,
                              message: 'Maximo de 12 caracteres'
                            }
                          })}
                        />

                      </div>
                      <div className='flex flex-col  w-3/6 px-2'>
                        <label className='mb-1'>Estado</label>
                        {errors.estadoprod && <p className='text-red-600'>{errors.estadoprod.message}</p>}
                        <input
                          placeholder='estado'
                          className='py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600'
                          type='text'
                          {...register('estadoprod', {
                            required: '*Este campo es requerido',
                            minLength: {
                              value: 5,
                              message: 'Minimo 5 caracteres'
                            },
                            maxLength: {
                              value: 20,
                              message: 'Maximo de 20 caracteres'
                            },
                            pattern: {
                              value: /^[a-zA-Z ]*$/,
                              message: 'Solo letras y espacios'
                            }
                          })}
                        />
                      </div>
                    </div>

                    <div className='flex items-center justify-between mb-5'>
                      <div className='flex flex-col  w-3/6 px-2'>
                        <label className='mb-1'>Capacidad</label>
                        {errors.capacidadprod && <p className='text-red-600'>{errors.capacidadprod.message}</p>}

                        <input
                          placeholder='capacidad'
                          className='py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600'
                          type='text'
                          {...register('capacidadprod', {
                            minLength: {
                              value: 3,
                              message: 'Minimo 3 caracteres'
                            },
                            maxLength: {
                              value: 20,
                              message: 'Maximo de 20 caracteres'
                            },
                            pattern: {
                              value: /^[a-zA-Z0-9 ]*$/,
                              message: 'Solo numero, letras y espacios'
                            }
                          })}
                        />
                      </div>
                      <div className='flex flex-col w-3/6 px-2'>
                        <label className='mb-1'>Color</label>
                        {errors.colorprod && <p className='text-red-600'>{errors.colorprod.message}</p>}
                        <input
                          placeholder='color'
                          className='py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600'
                          type='text'
                          {...register('colorprod', {
                            minLength: {
                              value: 3,
                              message: 'Minimo 3 caracteres'
                            },
                            maxLength: {
                              value: 40,
                              message: 'Maximo de 40 caracteres'
                            },
                            pattern: {
                              value: /^[a-zA-Z, ]*$/,
                              message: 'Solo numero, letras y espacios'
                            }
                          })}
                        />
                      </div>
                    </div>

                    <div className='flex items-center justify-between mb-5'>

                      <div className='flex flex-col  w-full px-2'>
                        <label className='mb-1'>Descripcion</label>
                        {errors.descripcionprod && <p className='text-red-600'>{errors.descripcionprod.message}</p>}
                        <textarea
                          type='text' id='descripcion'
                          placeholder='Lo ultimo en tecnologia movil'
                          {...register('descripcionprod', {
                            required: '*Este campo es requerido',
                            minLength: {
                              value: 5,
                              message: 'Minimo 6 caracteres'
                            },
                            maxLength: {
                              value: 20,
                              message: 'Maximo de 120 caracteres'
                            },
                            pattern: {
                              value: /^[a-zA-Z0-9,/ ]*$/,
                              message: 'Solo letras, comas, diagonales y espacios'
                            }
                          })}
                          className='py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600'
                        />
                      </div>
                      <div className='flex flex-col w-3/6 px-2'>
                        <label className='mb-1'>Imagen</label>
                        {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                        <input
                          className='py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600'
                          type='file'
                          {...register('image', {
                            required: '*Selecciona una imagen'

                          })}
                        />
                      </div>
                    </div>
                    <div className='flex items-center justify-between mb-5 text-right'>
                      <div className='flex flex-col text-right w-3/6 px-2'>
                        <input readOnly hidden type='text' id='idprod' className='rounded focus:outline-none text-gray-600 focus:text-gray-600' />

                      </div>
                      <button className='border-2 border-transparent bg-green-500 ml-3 py-2 px-4 font-bold uppercase text-black rounded transition-all hover:border-green-500 hover:bg-transparent hover:text-green-500'>Guardar</button>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </form>

      </div>

    </main>
  )
}
export default CrearProductoForm
