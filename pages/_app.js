import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/GlobalStyles"
import { darkTheme } from './../components/Themes'
import NavbarComponent from '../components/NavbarComponent'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (<>
      <Head>
        <meta charset="utf-8" />
        <title>VOC | Virtual On Community</title>
        <meta name="description" content="server ngobrol bebas " />
        <meta name="image" content="https://cdn.discordapp.com/attachments/811955187554975795/972764112583028794/VOC.png" />
        <meta itemProp="name" content="VOC | Virtual On Community" />
        <meta itemProp="description" content="VOC adalah singkatan dari 'virtual on community' yang didirikan oleh @Resident. Dimana Server ini merupakan sarana komunikasi antar sesama pribumi baik secara langsung melalui suara/video dengan voice channel ataupun dengan text."/>
        <meta itemProp="image" content="https://cdn.discordapp.com/attachments/811955187554975795/972764112583028794/VOC.png" />
        <meta name="og:title" content="VOC | Virtual On Community" />
        <meta name="og:description" content="VOC adalah singkatan dari 'virtual on community' yang didirikan oleh @Resident. Dimana Server ini merupakan sarana komunikasi antar sesama pribumi baik secara langsung melalui suara/video dengan voice channel ataupun dengan text."/>
        <meta name="og:image" content="https://cdn.discordapp.com/attachments/811955187554975795/972764112583028794/VOC.png" />
        <meta name="og:site_name" content="VOC | Virtual On Community" />
        <meta name="og:type" content="website"/>
      </Head>
      
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <NavbarComponent />
      <Component {...pageProps} />
    </ThemeProvider>

  </>)
}

export default MyApp
