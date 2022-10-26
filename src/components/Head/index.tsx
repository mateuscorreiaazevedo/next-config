import Head from 'next/head'
import React from 'react'

type Props = {
  title: string
}
export const HeadComponent: React.FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>
        {title}
      </title>
    </Head>
  )
}
