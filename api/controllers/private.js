exports.getPrivateRoute = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      data: 'Tienes acceso a esta ruta de administrador'
    })
}
