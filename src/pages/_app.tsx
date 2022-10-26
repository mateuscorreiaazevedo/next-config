import { AppProps } from 'next/app'
import '../assets/style/global.css'
import React from 'react'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
