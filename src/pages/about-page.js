import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import About from '../components/about'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'
import TopBanner from '../components/top-banner'

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Tent City Kumbh - Mahakumbh Prayagraj</title>
        <meta name="description" content="Learn about Tent City Kumbh in Prayagraj, Uttar Pradesh, a premium tent accommodation designed for the Mahakumbh. Experience the spiritual essence of the Kumbh Mela in luxury and comfort." />
        <meta name="keywords" content="About Tent City Kumbh, Mahakumbh 2025, Prayagraj tent accommodations, Kumbh luxury tents, Uttar Pradesh Kumbh Mela, spiritual retreat Prayagraj, Tent City Prayagraj features" />
        <link rel="canonical" href="https://tentcitykumbh.com/about" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "Tent City Kumbh",
            "url": "https://tentcitykumbh.com/about",
            "telephone": "+91 9318473156",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Prayagraj",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "India"
            },
            "description": "Tent City Kumbh in Prayagraj offers luxurious and comfortable tent accommodations for pilgrims and tourists visiting the Mahakumbh. Immerse yourself in the divine atmosphere of the Kumbh Mela."
          })}
        </script>
      </Helmet>


      <TopBanner />
      <Navbar />
      <About />
      <Footer />
      <SocialMediaFixed />
    </>
  )
}

export default AboutPage
