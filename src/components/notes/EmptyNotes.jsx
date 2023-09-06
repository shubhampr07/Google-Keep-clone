import React from 'react'
import { LightbulbOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyleLight = styled(LightbulbOutlined)`
font-size: 120px;
color: #F5F5F5;
`
const Text = styled(Typography)`
color: #80868b;
font-size: 22px;
`
const Container = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20vh;
margin-left: 70px;
`

const EmptyNotes = () => {
  return (
    <Container>
      <StyleLight />
      <Text>Notes you add appear here</Text>
    </Container>
  )
}

export default EmptyNotes
