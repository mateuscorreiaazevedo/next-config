import { AppProps } from 'next/app'
import '../styles/globals.css'
import React from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
