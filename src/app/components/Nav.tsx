'use client'
import { Box, Button, Container, useTheme } from '@mui/material'
import Image from 'next/image'

const Navbar = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#161616',
        position: 'sticky',
        mt: 4,
        top: 0,
      }}
    >
      <Container
        maxWidth="lg"
        component="nav"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',

          p: 2,
        }}
      >
        <Image
          src="/bs.svg"
          alt="breno page logo"
          width={60}
          height={30}
          priority
        />
        {/* Action Buttons */}
        <Box display="flex" gap={2}>
          <Button color="secondary" variant="outlined">
            Get in touch
          </Button>
          <Button color="primary" variant="contained">
            My curriculum
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
