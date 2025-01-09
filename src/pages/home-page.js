import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'
import TopBanner from '../components/top-banner'
import About from '../components/about'
import HowToReach from '../components/how-to-reach'
import Mahakumbh from '../components/mahakumbh'
import Attraction from '../components/attraction'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Tent City Kumbh - Prayagraj Uttar Pradesh</title>
        <meta name="description" content="Experience the grand Mahakumbh at Tent City Kumbh in Prayagraj, Uttar Pradesh. Enjoy premium tent accommodations, spiritual vibes, and cultural festivities during the holy Kumbh Mela." />
        <meta name="keywords" content="Tent City Kumbh, Mahakumbh 2025, Prayagraj tent city, Kumbh tent accommodations, Uttar Pradesh Kumbh Mela, luxury tents Mahakumbh, spiritual festival Prayagraj, Kumbh camping experience" />
        <link rel="canonical" href="https://tentcitykumbh.com/" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "Tent City Kumbh",
            "url": "https://tentcitykumbh.com/",
            "telephone": "+91 9318473156",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Prayagraj",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "India"
            },
            "description": "Tent City Kumbh offers premium tent accommodations during the Mahakumbh in Prayagraj, Uttar Pradesh, with spiritual and cultural experiences.",
            "keywords": "Tent City Kumbh, Mahakumbh 2025, Prayagraj tent city, Kumbh tent accommodations, Uttar Pradesh Kumbh Mela, luxury tents Mahakumbh, spiritual festival Prayagraj, Kumbh camping experience"
          })}
        </script>
      </Helmet>


      <TopBanner />
      <Navbar />
      <Hero />
      <Mahakumbh/>
      <About />
      <HowToReach/>
      <Attraction/>
      <Footer />
      <SocialMediaFixed />
    </>
  )
}

export default HomePage
