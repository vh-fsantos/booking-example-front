import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ChakraProvider } from '@chakra-ui/react'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Uniplaces Properties</title>
        <meta
          name="description"
          content="A simple project with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
      <ToastContainer />
    </>
  )
}

export default App
