import React, { useEffect, useState } from 'react'
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import Chip from '@mui/joy/Chip'
import axios from 'axios'
import './css/Lot.css'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(utc)
dayjs.extend(relativeTime)

const Sensor = () => {
  const [shotData, setShotData] = useState({
    '1호기': {},
    '2호기': {},
    '15호기': {},
  })

  useEffect(() => {
    const fetchShotData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/shot-data/')
        const data = response.data

        const currentTime = dayjs()

        const newShotData = {
          '1호기': processMachineData(
            data.find((item) => item.Machine_Name === '1호기'),
            currentTime,
          ),
          '2호기': processMachineData(
            data.find((item) => item.Machine_Name === '2호기'),
            currentTime,
          ),
          '15호기': processMachineData(
            data.find((item) => item.Machine_Name === '15호기'),
            currentTime,
          ),
        }

        setShotData(newShotData)
      } catch (error) {
        console.error('Error fetching shot data:', error)
      }
    }

    fetchShotData()
  }, [])

  const processMachineData = (machineData, currentTime) => {
    if (!machineData) {
      return { Shot_Number: 'N/A', Operational_Status: 'N/A' }
    }

    const timeDifference = currentTime.diff(dayjs(machineData.TimeStamp), 'minute')

    return {
      Shot_Number: machineData.Shot_Number,
      Operational_Status: timeDifference < 3 ? '작동중' : '작동중지',
    }
  }

  const renderCard = (machineName) => (
    <Card key={machineName} variant="solid" size="lg" color="primary" invertedColors>
      <CardContent>
        <Typography marginLeft="10px" level="body-lg">
          {machineName}
        </Typography>
        <Box>
          <Typography level="title-lg">
            <Chip className="chip-container" size="lg">
              Shot Number
            </Chip>
            {shotData[machineName]?.Shot_Number || 'N/A'}
          </Typography>
          <Typography level="title-lg">
            <Chip className="chip-container" size="lg">
              동작상태
            </Chip>
            {shotData[machineName]?.Operational_Status || 'N/A'}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )

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
      {renderCard('1호기')}
      {renderCard('2호기')}
      {renderCard('15호기')}
    </Box>
  )
}

export default Sensor
