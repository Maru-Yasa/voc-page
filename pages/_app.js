import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/GlobalStyles"
import { darkTheme } from './../components/Themes'
import NavbarComponent from '../components/NavbarComponent'
import { useEffect } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {



  return (<>
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>VOC | Virtual on Community</title>
      </Head>

      <GlobalStyles />
      <NavbarComponent />
      <Component {...pageProps} />
    </ThemeProvider>

  </>)
}

export default MyApp
