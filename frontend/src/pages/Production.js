import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, Box } from '@mui/joy'
import './css/Stock.css'

const Production = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // API에서 데이터를 가져옴
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/production/`)
        const data = response.data
        setProducts(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Box
      className="table-container"
      sx={{
        width: '100%',
        maxWidth: 800,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 2,
      }}
    >
      <Box className="table-wrapper">
        <Table aria-label="stock table" variant="outlined">
          <thead>
            <tr>
              <th className="table-header">ERP CODE</th>
              <th className="table-header">품명</th>
              <th className="table-header">수량</th>
            </tr>
          </thead>
          <tbody className="table-cell">
            {products.map((stock, index) => (
              <tr key={index}>
                <td className="table-row">{stock.erp_code}</td>
                <td className="table-cell">{stock.product_name}</td>
                <td className="table-row">{stock.total_stock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </Box>
  )
}

export default Production
