import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Routing
import PrivateRoute from '../routing/PrivateRoute'
import PublicRoute from '../routing/PublicRoute'
import NotFoundScreen from '../screens/404'
// Screens
import 'bootstrap/dist/css/bootstrap.min.css'
import PrivateScreen from '../screens/PrivateScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import ResetPasswordScreen from '../screens/ResetPasswordScreen'
import InicioScreen from '../screens/InicioScreen'
import CatalogoScreen from '../screens/CatalogoScreen'
import CrearProductoScreen from '../screens/CrearProductoScreen'
import ProductosScreen from '../screens/ProductosScreen'
export default function AppRouter () {
  return (
    <Router>

      <Switch>
        <PublicRoute exact path='/' component={InicioScreen} />
        <PublicRoute exact path='/catalogo' component={CatalogoScreen} />
        <PublicRoute exact path='/login' component={LoginScreen} />
        <PublicRoute exact path='/register' component={RegisterScreen} />
        <PublicRoute exact path='/forgotpassword' component={ForgotPasswordScreen} />
        <PublicRoute exact path='/passwordreset/:resetToken' component={ResetPasswordScreen} />
        <PublicRoute exact path='/catalogo' component={CatalogoScreen} />
        <PrivateRoute exact path='/dashboard' component={PrivateScreen} />
        <PrivateRoute exact path='/dashboard/CrearProducto' component={CrearProductoScreen} />
        <PrivateRoute exact path='/dashboard/ListaProducto' component={ProductosScreen} />
        <Route path='*' component={NotFoundScreen} />
      </Switch>

    </Router>
  )
}
