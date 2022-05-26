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
        <Head>

      
  <meta charset="utf-8"> </meta>
  <title>VOC | Virtual On Community</title>
  <meta name="description" content="server ngobrol bebas "></meta>
  <meta name="image" content="https://cdn.discordapp.com/attachments/811955187554975795/972764112583028794/VOC.png"></meta>
  <meta itemProp="name" content="VOC | Virtual On Community"></meta>
  <meta itemProp="description" content="server ngobrol bebas "></meta>
  <meta itemProp="image" content="https://cdn.discordapp.com/attachments/811955187554975795/972764112583028794/VOC.png"></meta>
  <meta name="og:title" content="VOC | Virtual On Community"></meta>
  <meta name="og:description" content="server ngobrol bebas "></meta>
  <meta name="og:image" content="https://cdn.discordapp.com/attachments/811955187554975795/972764112583028794/VOC.png"></meta>
  <meta name="og:site_name" content="VOC | Virtual On Community"></meta>
  <meta name="og:type" content="website"></meta>


      </Head>
    <ThemeProvider theme={darkTheme}>

      <GlobalStyles />
      <NavbarComponent />
      <Component {...pageProps} />
    </ThemeProvider>

  </>)
}

export default MyApp
