const { model, Schema } = require('mongoose')

const productoSchema = new Schema({
  nombreproducto: {
    type: String,
    required: [true, 'Por favor ingrese un Nombre']
  },
  precioprod: {
    type: Number,
    required: [true, 'Por favor ingrese el Precio']
  },
  fabricante: {
    type: String,
    required: [true, 'Por favor ingrese un Fabricante']
  },
  tipo: {
    type: String,
    required: [true, 'Por favor ingrese un Tipo']
  },
  codigoprod: {
    type: String,
    required: [true, 'Por favor ingrese un codigo para el Producto']
  },
  estadoprod: {
    type: String,
    required: [true, 'Por favor ingrese un Estado']
  },
  colorprod: {
    type: String
  },
  cantidadprod: {
    type: Number,
    required: [true, 'Por favor ingrese una Cantidad']
  },
  capacidadprod: {
    type: String
  },
  descripcionprod: {
    type: String,
    required: [true, 'Por favor ingrese una descripcion para el Producto']
  },
  productoImage: {
    type: String
  },

  fecharegistroprod: Date
})

productoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Producto = model('Producto', productoSchema)

module.exports = Producto
