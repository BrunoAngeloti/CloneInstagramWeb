import GlobalStyle from '../styles/globals'
import type { AppProps } from 'next/app'

import Layout from '../layout/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>     
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
