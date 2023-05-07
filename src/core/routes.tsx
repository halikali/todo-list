import Home from 'components/pages/Home'
import Login from 'components/pages/Login'
import Register from 'components/pages/Register'
import { RoutesType } from 'types/routeTyes'

enum RouteEnum {
  home = '/',
  login = '/login',
  register = '/register',
}

const routes: RoutesType = [
  {
    path: RouteEnum.login,
    component: <Login />,
    name: 'LoginPage',
    isProtected: false,
  },
  {
    path: RouteEnum.home,
    component: <Home />,
    name: 'HomePage',
    isProtected: true,
  },
  {
    path: RouteEnum.register,
    component: <Register />,
    name: 'RegisterPage',
    isProtected: false,
  },
  {
    path: '*',
    component: <Home />,
    name: 'HomePage',
    isProtected: true,
  },
]

export default routes
