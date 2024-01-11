'use client'
import { Box, PaletteMode } from '@mui/material'
import ContrastIcon from '@mui/icons-material/Contrast'
import { useTheme, createTheme } from '@mui/material/styles'
import { useContext } from 'react'
import { ColorModeContext } from '../layout'

type ThemeToggleProps = {
  mode: PaletteMode
}

const ThemeToggle = ({ mode }: ThemeToggleProps) => {
  const colorMode = useContext(ColorModeContext)
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '72px',
        height: '72px',
        borderRadius: '72px',
        position: 'absolute',
        bottom: 32,
        right: 32,
        cursor: 'pointer',
        transition: 'all 1s ease',
      }}
      bgcolor="primary.main"
      onClick={colorMode.toggleColorMode}
    >
      <ContrastIcon
        fontSize="large"
        sx={{
          transition: 'color 300ms ease',
          color: mode === 'dark' ? '#000' : '#fff',
        }}
      />
    </Box>
  )
}
export default ThemeToggle
