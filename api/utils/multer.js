const multer = require('multer')
const path = require('path')

// Multer config
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png' && ext !== '.gif') {
      cb(new Error('Formato de imagen no soportado'), false)
      return
    }
    cb(null, true)
  }
})
