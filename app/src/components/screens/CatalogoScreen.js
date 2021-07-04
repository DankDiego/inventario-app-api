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
      .catch((err) => { console.log(err) })
  }, [])
  return (
    <>
      <div id='section' className='location__header' />
      <div id='section' className='location__header' />
      <div className='container'>
        <h1>Lista de productos</h1>
        <br />
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 '>
          {productos.map((val, key) => {
            return (
              <div className='place-self-stretch' key={key}>
                <div className='max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10'>
                  <div className='px-4 py-2'>
                    <h1 title={val.nombreproducto} className='truncate h-34 hover:bg-blue-100 title={val.no} text-gray-900 font-bold text-2xl uppercase'>{val.nombreproducto}</h1>

                  </div>
                  <img title={val.nombreproducto} className='object-contain h-80 w-full' src={baseUrlImg + val.productoImage} alt={val.nombreproducto} />
                  <div className='flex items-center justify-between px-4 py-2 bg-gray-900'>
                    <h1 className='text-gray-200 font-bold text-xl'>s/.{val.precioprod}</h1>
                    <button className='hover:bg-green-500 px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded'>Comprar</button>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>

    </>
  )
}

export default CatalogoScreen
