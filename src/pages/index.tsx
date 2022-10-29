import { HeadComponent } from '../components/Head'
import React from 'react'
import { Alert, AlertIcon, Button, Heading, useToast } from '@chakra-ui/react'

const Home: React.FC = () => {
  const toast = useToast()
  const [message, setMessage] = React.useState('Lorem, ipsum.')

  const successMessage = () => {
    toast({
      title: 'Toast Acionado!',
      status: 'success',
      duration: 2000,
      position: 'bottom-left',
      description: 'Olá esse é um teste do toast do Chakra UI'
    })
  }

  const errorMessage = () => {
    toast({
      title: 'Erro!',
      status: 'error',
      duration: 2000,
      position: 'bottom-left',
      description: message
    })
  }

  return (
    <>
      <HeadComponent title="Home" />
      <>
        <Heading as="h1">Hello World</Heading>
        <Button
          onClick={successMessage}
          py={4}
          px={8}
          background="blue.300"
          color="white"
          fontWeight={'bold'}
          fontSize={'3xl'}
          transition="all 400ms"
          _hover={{
            background: 'blue.500'
          }}
        >
          Toast
        </Button>
        <Button
          onClick={errorMessage}
          py={4}
          px={8}
          background="red.300"
          color="white"
          fontWeight={'bold'}
          fontSize={'3xl'}
          transition="all 400ms"
          _hover={{
            background: 'red.500'
          }}
        >
          Toast
        </Button>
      </>
    </>
  )
}

export default Home
