import React from 'react'
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 500,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 2,
      }}
    >
      <Card variant="outlined" onClick={() => handleNavigate('/production')}>
        <CardContent>
          <Typography level="title-md">생산현황 바로가기</Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" onClick={() => handleNavigate('/stock')}>
        <CardContent>
          <Typography level="title-md">재고현황 바로가기</Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" onClick={() => handleNavigate('/facility')}>
        <CardContent>
          <Typography level="title-md">설비현황 바로가기</Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" onClick={() => handleNavigate('/sensor')}>
        <CardContent>
          <Typography level="title-md">센서현황 바로가기</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Home
