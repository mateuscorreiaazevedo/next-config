import { HeadComponent } from '../components/Head'
import React from 'react'

const Home: React.FC = () => {
  return (
    <>
      <HeadComponent title="Home" />
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  )
}

export default Home
