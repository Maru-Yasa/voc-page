import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import AboutComponent from '../components/AboutComponent'
import AdminComponent from '../components/AdminComponent'
import Profile from '../components/Profile'
import RulesComponent from '../components/RulesComponent'
import styles from '../styles/Home.module.css'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Index(){

  useEffect(() => {
    AOS.init()
  }, [])

  return (<>
  
    <Container>
      <Profile />
      <AboutComponent />
      <RulesComponent />
      <AdminComponent />
    </Container>

  </>)
}