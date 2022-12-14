import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'


export default function App({ Component, pageProps }: AppProps) {

  return <>
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  </>
}
