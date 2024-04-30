'use client'
import { Box, Container, useTheme } from '@mui/material'

type ExperienceProps = {}

const Experience = (props: ExperienceProps) => {
  const theme = useTheme()

  return (
    <Box
      pt="80px"
      sx={{
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#161616',
      }}
    >
      <Container maxWidth="lg">
        <Box display="flex" gap="32px"></Box>
      </Container>
    </Box>
  )
}
export default Experience
