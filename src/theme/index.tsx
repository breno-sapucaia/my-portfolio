import { PaletteMode, ThemeOptions } from '@mui/material'
import components from './components'
import typography from './typography'
export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  typography,
  components,
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#9c8cfb',
          },
          secondary: {
            main: '#000',
          },
          divider: '#f2f2f2',
          background: {
            default: '#fff',
            paper: '#f6f6f6',
          },
          text: {
            primary: '#1f1f1f',
            secondary: '#9c8cfb',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#9c8cfb',
          },
          secondary: {
            main: '#fff',
          },
          divider: '#444',
          background: {
            default: '#161616',
            paper: '#1f1f1f',
          },
          text: {
            primary: '#ffff',
            secondary: '#9c8cfb',
          },
        }),
  },
})
