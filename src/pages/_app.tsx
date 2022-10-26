import {ThemeProvider} from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { AppProps } from 'next/app'
import React from 'react'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default MyApp
