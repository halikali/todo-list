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
  },
  {
    path: RouteEnum.home,
    component: <Home />,
    name: 'HomePage',
  },
  {
    path: RouteEnum.register,
    component: <Register />,
    name: 'RegisterPage',
  },
  {
    path: '*',
    component: <Home />,
    name: 'HomePage',
  },
]

export default routes
