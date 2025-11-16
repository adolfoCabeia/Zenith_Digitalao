import React from 'react'
import Hero from '../Components/Home/Hero'
import DetalhesHome from '../Components/Home/DetalhesHome'
import ServicosZenith from '../Components/Home/Servicos'
import ContactosMinimal from '../Components/Home/ContactosMinimal'
import NewsletterMinimal from '../Components/Home/Newsletter'


const Home = () => {
  return (
    <>
        <Hero/>
        <DetalhesHome/>
        <ServicosZenith/>
        <ContactosMinimal/>
        <NewsletterMinimal/>
    </>
  )
}

export default Home