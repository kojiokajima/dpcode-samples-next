import React from 'react'
import '../styles/globals.css'
import { Header, Footer } from '../components/index'
import { Provider } from 'next-auth/client'
import { Button } from '@material-ui/core'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  // console.log("Cmponent: ", Component);
  // console.log("pageProps: ", pageProps);

  return (
    <>
    <Provider session={pageProps.session}>
      <Header />

      <Component {...pageProps} />
      {/* <Header /> */}
      <Footer />
      <div className="buttons" style={{ display: "flex", justifyContent: "space-around", marginTop: "10vh" }}>
        <Link href="/sample1">
          <Button variant="contained" color="primary">
            SAMPLE PAGE 1
          </Button>
        </Link>
        <Link href="/sample2">
          <Button variant="contained" color="primary">
            SAMPLE PAGE2
          </Button>
        </Link>
        <Link href="/sample3">
          <Button variant="contained" color="primary">
            SAMPLE PAGE3
          </Button>
        </Link>
        <Link href="/sample4">
          <Button variant="contained" color="primary">
            SAMPLE PAGE4
          </Button>
        </Link>

      </div>
    </Provider>
    </>
  )
}

export default MyApp
