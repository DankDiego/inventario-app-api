import axios from 'axios'
import swal from 'sweetalert2'
const baseUrl = '/api'
export async function getProductos () {
  try {
    const response = await axios({
      url: `${baseUrl}/productos`,
      method: 'GET'
    })
    console.log('ñeee')
    return response
  } catch (e) {
    console.log(e)
  }
}
export async function saveProducto (data) {
  try {
    console.log(baseUrl)
    console.log(data)
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
    console.log(e)
  }
}
