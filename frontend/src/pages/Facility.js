import React, { useEffect, useState } from 'react'
import { Box, Table, Chip } from '@mui/joy'
import axios from 'axios'

const Facility = () => {
  const [facilities, setFacilities] = useState([])

  useEffect(() => {
    // API에서 데이터 가져오기
    const fetchFacilities = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/facility/')
        setFacilities(response.data)
      } catch (error) {
        console.error('Error fetching facility data:', error)
      }
    }

    fetchFacilities()
  }, [])

  const getStatusChip = (status) => {
    switch (status) {
      case 'Y':
        return (
          <Chip
            color="success"
            variant="solid"
            label="작업완료"
            sx={{ width: '80px' }} // 너비를 80px로 통일
          >
            작업완료
          </Chip>
        )
      case 'N':
        return (
          <Chip
            color="warning"
            variant="solid"
            label="작업중"
            sx={{ width: '80px' }} // 너비를 80px로 통일
          >
            작업중
          </Chip>
        )
      default:
        return (
          <Chip
            color="neutral"
            variant="solid"
            label="알수없음"
            sx={{ width: '80px' }} // 너비를 80px로 통일
          >
            알수없음
          </Chip>
        )
    }
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
      <Table aria-label="facility status table" variant="outlined">
        <thead>
          <tr>
            <th>호기</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {facilities.map((facility, index) => (
            <tr key={index}>
              <td>{facility.injector}</td>
              <td>{getStatusChip(facility.is_injected)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  )
}

export default Facility
