import { HeadComponent } from '../components/Head'
import React from 'react'

const Home: React.FC = () => {
  return (
    <>
      <HeadComponent title="Home" />
      <div>
        <h1 className='text-4xl bg-violet-700 w-full py-4 text-center rounded-full'>
          Hello World
        </h1>
      </div>
    </>
  )
}

export default Home
