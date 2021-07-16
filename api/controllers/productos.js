const productosRouter = require('express').Router()
const Producto = require('../models/Producto')
const ErrorResponse = require('../utils/errorResponse')
/* const multer = require('multer') */
const upload = require('../utils/multer')
const cloudinary = require('../utils/cloudinary')

// Registro de producto
productosRouter.post('/', upload.single('image'), async (req, res, next) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path)
    const newProducto = new Producto({
      nombreproducto: req.body.nombreproducto,
      precioprod: req.body.precioprod,
      fabricante: req.body.fabricante,
      tipo: req.body.tipo,
      codigoprod: req.body.codigoprod,
      estadoprod: req.body.estadoprod,
      colorprod: req.body.codigoprod,
      cantidadprod: req.body.cantidadprod,
      capacidadprod: req.body.capacidadprod,
      descripcionprod: req.body.descripcionprod,
      productoImage: result.public_id,
      fecharegistroprod: new Date()
    })
    await newProducto.save()
    res.json('Articulo nuevo Creado').end()
  } catch (err) {
    next(err)
  }
})

productosRouter.get('/', async (req, res, next) => {
  try {
    const productos = await Producto.find({})
    res.json(productos).end()
  } catch (err) {
    next(err)
  }
})

productosRouter.get('/:id', async (req, res, next) => {
  const { id } = req.params
  Producto.findById(id)
    .then(producto => {
      if (producto) { return res.json(producto).end() } else { return next(new ErrorResponse('No se pudo encontrar el producto', 404)) }
    })
    .catch(err => {
      next(err)
    })
})

productosRouter.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  const deleting = await Producto.findByIdAndDelete(id)
  if (deleting === null) return res.sendStatus(404)
  res.status(204).end()
  console.log('Producto ha sido eliminado')
})

//  findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.
productosRouter.put('/:id', async (req, res, next) => {
  const { id } = req.params
  Producto.findOneAndUpdate({ _id: id }, { $set: req.body }, { new: true }).then(result => {
    res.json(result).end()
  })
    .catch(next)
})

module.exports = productosRouter
