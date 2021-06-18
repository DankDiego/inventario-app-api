import React from 'react'

/* import swal from 'sweetalert' */
import { useForm } from 'react-hook-form'
import { Col, Form, Button, Row } from 'react-bootstrap'
import { saveProducto } from '../services/ProductoService'
/* import { useForm } from 'react-hook-form' */

const CrearProductoForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data, e) => {
    console.log(errors)
    saveProducto(data)
    e.target.reset()
  }
  return (
    <main>

      <div className='main__container'>
        <div className='main__container__center'>
          <div
            className='main__container__button'
          >
            <Row>
              <h2>Registro de producto</h2>
            </Row>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Row>
              {/* <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Correo</Form.Label>
              <input
                className='form-control'
                type='text'
                {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
              />
            </Form.Group> */}
              <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Label>Nombre del producto:</Form.Label>
                <input
                  className='form-control'
                  type='text'
                  {...register('nombreproducto', { min: 3, maxLength: 50, required: true, pattern: /\w*\s*/i })}
                />
              </Form.Group>
              <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Label>Fabricante:</Form.Label>
                <input
                  className='form-control'
                  type='text'
                  {...register('fabricante', { min: 3, maxLength: 30, required: true, pattern: /\w*\s*/i })}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>

              <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Label>Tipo del Producto:</Form.Label>
                <input
                  className='form-control'
                  type='text'
                  {...register('tipo', { min: 3, maxLength: 20, required: true, pattern: /[a-zA-Z ]/i })}
                />
              </Form.Group>
              <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Label>Codigo del Producto:</Form.Label>
                <input
                  className='form-control'
                  type='text'
                  {...register('codigoprod', { required: true, min: 6, maxLength: 50, pattern: /[a-zA-Z0-9]/i })}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>

              <Form.Group as={Col} controlId='formGridEmail'>
                <Form.Label>Estado:</Form.Label>
                <input
                  className='form-control'
                  type='text'
                  {...register('estadoprod', { required: true, min: 3, maxLength: 50, pattern: /[a-zA-Z ]/i })}
                />
              </Form.Group>
              <Form.Group as={Col} controlId='formColor'>
                <Form.Label>Color:</Form.Label>
                <input
                  className='form-control'
                  type='text'
                  {...register('colorprod', { min: 3, maxLength: 50, pattern: /\w*\s*/i })}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>

              <Form.Group as={Col} controlId='formCantidad'>
                <Form.Label>Cantidad:</Form.Label>
                <input
                  className='form-control'
                  type='text'
                  {...register('cantidadprod', { required: true, min: 1, maxLength: 5, pattern: /\d/i })}
                />
              </Form.Group>
              <Form.Group as={Col} controlId='formCapacidad'>
                <Form.Label>Capacidad:</Form.Label>
                <input
                  className='form-control'
                  type='text'
                  {...register('capacidadprod', { min: 3, maxLength: 40, pattern: /\w*\s*/i })}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>

              <Form.Group as={Col} controlId='formprecioprod'>
                <Form.Label>precioprod:</Form.Label>
                <input
                  className='form-control'
                  type='text'
                  {...register('precioprod', { required: true, min: 1, maxLength: 5, pattern: /\d/i })}
                />
              </Form.Group>
              <Form.Group as={Col} controlId='formFile'>
                <Form.Label>Imagen del producto</Form.Label>
                <input
                  type='file'
                  className='form-control'
                  {...register('image')}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId='formDescripcion'>
                <Form.Label>Descripcion: </Form.Label>
                <textarea
                  className='form-control'
                  type='text'
                  {...register('descripcionprod', { required: true, min: 6, maxLength: 320, pattern: /\w*\s*/i })}
                />

              </Form.Group>
              <Form.Group as={Col} controlId='formButton'>
                <Form.Label>Enviar: </Form.Label>
                <div className='main__container__button'>
                  <Button variant='success' type='submit'>
                    Registrar Producto
                  </Button>
                </div>
              </Form.Group>
            </Form.Row>
          </Form>

        </div>
      </div>
    </main>
  )
}
export default CrearProductoForm
