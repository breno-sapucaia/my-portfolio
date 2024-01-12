import { PaletteMode } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'
import { Manrope } from 'next/font/google'
const manrope = Manrope({ subsets: ['latin'] })

const typography = (mode: PaletteMode): TypographyOptions => ({
  fontFamily: manrope.style.fontFamily,
  h1: {
    fontSize: '58px',
  },
  body2: {
    fontSize: '24px',
  },
})

export default typography
