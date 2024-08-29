import React, { useState, useEffect } from 'react'
import { Box, Button } from '@mui/joy'
import { useNavigate, useLocation } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import './Header.scss'
import routes from '../routes'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedPage, setSelectedPage] = useState('Home')

  useEffect(() => {
    const currentRoute = routes.find((route) => route.path === location.pathname)
    if (currentRoute) {
      setSelectedPage(currentRoute.name)
    }
  }, [location.pathname])

  const handlePageSelect = (page) => {
    setSelectedPage(page)
    const selectedRoute = routes.find((route) => route.name === page)
    if (selectedRoute) {
      navigate(selectedRoute.path)
    } else {
      navigate('/')
    }
  }

  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 2,
        bgcolor: 'rgba(255, 255, 255)',
        color: 'black',
        width: '100%',
        overflowX: 'hidden', // 화면이 흔들리지 않도록 설정
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
        <img src={Logo} alt="D&E Logo" style={{ width: '50px', marginBottom: '8px' }} />
      </Box>

      <Box className="header-container">
        {routes.map((route) => (
          <Button
            key={route.name}
            variant={selectedPage === route.name ? 'solid' : 'soft'}
            className={`header-button ${selectedPage === route.name ? 'selected' : ''}`} // 선택된 페이지에 클래스 추가
            onClick={() => handlePageSelect(route.name)}
          >
            {route.name}
          </Button>
        ))}
      </Box>
    </Box>
  )
}

export default Header
