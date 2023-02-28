import Home from 'components/pages/Home'
import Login from 'components/pages/Login'
import { RoutesType } from 'types/routeTyes'

enum RouteEnum {
  home = '/',
  login = '/login',
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
]

export default routes
