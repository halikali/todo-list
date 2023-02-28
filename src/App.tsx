import { Routes, Route } from 'react-router-dom'

import routes from './core/routes'

function App() {
  return (
    <Routes>
      {routes.map((item) => (
        <Route key={item.name} path={item.path} element={item.component} />
      ))}
    </Routes>
  )
}

export default App
