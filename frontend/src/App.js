import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import routes from './routes'

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={<DefaultLayout>{element}</DefaultLayout>} />
        ))}
      </Routes>
    </Router>
  )
}

export default App
