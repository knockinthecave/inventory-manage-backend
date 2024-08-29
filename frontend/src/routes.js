import React from 'react'
import Home from './pages/Home'
import Facility from './pages/Facility'
import Production from './pages/Production'
import Stock from './pages/Stock'
import Sensor from './pages/Sensor'

const routes = [
  {
    path: '/',
    element: <Home />,
    name: '홈',
  },
  {
    path: '/production',
    element: <Production />,
    name: '생산현황',
  },
  {
    path: '/stock',
    element: <Stock />,
    name: '재고현황',
  },
  {
    path: '/facility',
    element: <Facility />,
    name: '설비현황',
  },
  {
    path: '/sensor',
    element: <Sensor />,
    name: '센서현황',
  },
]

export default routes
