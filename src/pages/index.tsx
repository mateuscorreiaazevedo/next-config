import nextImg  from '../assets/next-js.svg'
import Head from 'next/head'
import styled from 'styled-components'
import React from 'react'

const Image = styled.img`
  width: 100px;

`


const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <div>
        <h1>Hello World</h1>
        <Image src={nextImg} alt="" />
      </div>
    </>
  )
}

export default Home
