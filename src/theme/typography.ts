import { TypographyOptions } from '@mui/material/styles/createTypography'
import { Manrope } from 'next/font/google'
const manrope = Manrope({ subsets: ['latin'] })

const typography: TypographyOptions = {
  fontFamily: manrope.style.fontFamily,
}

export default typography
