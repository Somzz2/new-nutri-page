import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutUs from '../components/AboutUs'
import Banner from '../components/Banner'
import { Clients } from '../components/Clients'
import { Consultancy } from '../components/Consultancy'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import NutritionConsultations from '../components/NutritionConsultations'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ana Carla Falcão</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <AboutUs />
      <NutritionConsultations />
      <Consultancy />
      <Clients />
      <Footer />
    </div>
  )
}

export default Home
