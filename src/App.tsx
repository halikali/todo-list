import { Routes, Route, Navigate } from 'react-router-dom'
import { getCookie } from 'typescript-cookie'

import routes from './core/routes'

function Protected({ isProtected, children }: { isProtected: boolean; children: any }) {
  const token = getCookie('token')

  if (isProtected && !token) {
    return <Navigate to="/login" replace />
  }
  return children
}

function App() {
  return (
    <Routes>
      {routes.map((item) => (
        <Route
          key={item.name}
          path={item.path}
          element={<Protected isProtected={item.isProtected}> {item.component}</Protected>}
        />
      ))}
    </Routes>
  )
}

export default App
