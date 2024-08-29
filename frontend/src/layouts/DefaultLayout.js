import React from 'react'
import PropTypes from 'prop-types'
import { Box, CssBaseline } from '@mui/joy'
import Header from '../components/Header'

function DefaultLayout({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          bgcolor: 'background.default',
          overflowY: 'auto',
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
