import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Home from './home'

const App: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Clone Instagram" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </div>
  )
}

export default App
