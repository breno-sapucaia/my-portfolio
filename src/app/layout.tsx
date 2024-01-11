'use client'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import ThemeToggle, { ColorModeContext } from './components/ThemeToggle'
import { createContext, useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import { getDesignTokens } from '@/theme'
import CssBaseline from '@mui/material/CssBaseline'

import { Manrope } from 'next/font/google'
const manrope = Manrope({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])
  return (
    <html lang="en">
      <body className={manrope.className}>
        <CssBaseline />
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <ThemeToggle mode={mode} />
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  )
}
