import axios from 'axios'
import swal from 'sweetalert2'
const baseUrl = '/api'
export async function getProductos () {
  try {
    const response = await axios({
      url: `${baseUrl}/productos`,
      method: 'GET'
    })
    return response
  } catch (e) {
    console.log(e)
  }
}
export async function getProducto (id) {
  try {
    console.log(id)
    const response = await axios({
      url: `${baseUrl}/productos/${id}`,
      method: 'GET'
    })
    return response
  } catch (e) {
    console.log(e)
  }
}
export async function saveProducto (data) {
  try {
    // eslint-disable-next-line no-undef
    const formData = new FormData()
    formData.append('nombreproducto', data.nombreproducto)
    formData.append('precioprod', data.precioprod)
    formData.append('fabricante', data.fabricante)
    formData.append('tipo', data.tipo)
    formData.append('codigoprod', data.codigoprod)
    formData.append('estadoprod', data.estadoprod)
    formData.append('colorprod', data.colorprod)
    formData.append('cantidadprod', data.cantidadprod)
    formData.append('capacidadprod', data.capacidadprod)
    formData.append('descripcionprod', data.descripcionprod)
    formData.append('image', data.image[0])
    const response = await axios({
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      url: `${baseUrl}/productos`,
      method: 'POST',
      data: formData
    })
    if (response.status === 200) {
      swal.fire({
        title: 'Registrado Correctamente',
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        toast: true,
        position: 'top-end'
      })
    } else {
      console.log('algo fue mal')
    }
  } catch (e) {
    swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo salio mal!'
    })
    console.log(e)
  }
}
export async function updateProducto (data) {
  try {
    // eslint-disable-next-line no-undef
    /* const formData = new FormData() */
    const objid = data.objidproducto
    const datapost = {
      nombreproducto: data.nombreproducto,
      precioprod: data.precioprod,
      fabricante: data.fabricante,
      tipo: data.tipo,
      codigoprod: data.codigoprod,
      estadoprod: data.estadoprod,
      colorprod: data.colorprod,
      cantidadprod: data.cantidadprod,
      capacidadprod: data.capacidadprod,
      descripcionprod: data.descripcionprod
    }
    console.log(datapost)
    console.log(objid)
    const response = await axios({
      url: `${baseUrl}/productos/${objid}`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      data: datapost
    })
    if (response.status === 200) {
      swal.fire({
        title: 'Editado Correctamente',
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        toast: true,
        position: 'top-end'
      })
    } else {
      console.log('algo fue mal')
    }
  } catch (e) {
    swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo salio mal!'
    })
    console.log(e)
  }
}
