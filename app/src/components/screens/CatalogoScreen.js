import './css/CatalogoScreen.css'
import { getProductos } from '../services/ProductoService'
import { useEffect, useState } from 'react'
const baseUrlImg = 'https://res.cloudinary.com/dsulcam/image/upload/c_thumb,w_200,g_face/v1623650544/'
const CatalogoScreen = ({ history }) => {
  const [productos, setProductos] = useState([])
  useEffect(() => {
    async function loadProductos () {
      const response = await getProductos()
      if (response.status === 200) {
        setProductos(response.data)
      }
    }
    loadProductos()
    /* axios
      .get(baseUrl)
      .then(res => {
        setProductos(res.data)
        console.log(res.data)
      })
      .catch((err) => { console.log(err) }) */
  }, [])
  return (
    <>
      <div id='section' className='location__header' />
      <main>
        <div className='main__container'>
          <h1>Lista de productos</h1>
          <br />
          <div className='Sulca'>
            {productos.map((val, key) => {
              return (
                <div className='card2' key={key}>
                  <h3>{val.nombreproducto}</h3>
                  <img src={baseUrlImg + val.productoImage} className='figure-img img-fluid rounded' width='171' height='180' />
                  <p>Descripcion: {val.descripcionprod}</p>
                  <p>Stock: {val.cantidadprod}</p>
                  <p>Codigo: {val.codigoprod}</p>
                  <p>Precio: s/.{val.precioprod}</p>
                </div>
              )
            })}

          </div>
        </div>

      </main>
    </>
  )
}

export default CatalogoScreen
