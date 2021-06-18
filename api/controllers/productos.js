const productosRouter = require('express').Router()
const Producto = require('../models/Producto')
const ErrorResponse = require('../utils/errorResponse')
/* const multer = require('multer') */
const upload = require('../utils/multer')
const cloudinary = require('../utils/cloudinary')

/* const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './public/uploads')
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
})

const upload = multer({ storage: storage }) */

/* productosRouter.post('/', upload.single('image'), (req, res, next) => {
  const result = cloudinary.uploader.upload(req.file.path)
  console.log(result.public_id)
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
  newProducto
    .save()
    .then(() => res.json('Articulo nuevo Creado'))
    .catch((err) => res.status(400).json(`Error: ${err}`))
}) */

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
    res.json('Articulo nuevo Creado')
    console.log('Articulo Creado')
  } catch (err) {
    next(err)
  }
})

productosRouter.get('/', async (req, res, next) => {
  try {
    const productos = await Producto.find({})
    res.json(productos)
  } catch (err) {
    next(err)
  }
})

productosRouter.get('/:id', async (req, res, next) => {
  const { id } = req.params
  Producto.findById(id)
    .then(producto => {
      if (producto) { return res.json(producto) } else { return next(new ErrorResponse('No se pudo encontrar el producto', 404)) }
    })
    .catch(err => {
      next(err)
    })
})

productosRouter.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  const deleting = await Producto.findOneAndDelete(id)
  if (deleting === null) return res.sendStatus(404)
  res.status(204).end()
  console.log('Producto ha sido eliminado')
})

//  findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.
productosRouter.put('/:id', async (req, res, next) => {
  const { id } = req.params
  Producto.findOneAndUpdate({ _id: id }, { $set: req.body }, { new: true }).then(result => {
    res.json(result)
  })
    .catch(next)
})

module.exports = productosRouter
