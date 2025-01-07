import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import KumbhMap from '../components/kumbh-map'
import SocialMediaFixed from '../components/socialmedia-fixed'
import TopBanner from '../components/top-banner'

const KumbhMapPage = () => {
  return (
    <>
      <Helmet>
        <title>Kumbh Map - Tent City Kumbh Prayagraj</title>
        <meta name="description" content="Explore the Kumbh Map to navigate key locations in the Mahakumbh, including Tent City Kumbh, ghats, campsites, and spiritual sites in Prayagraj, Uttar Pradesh." />
        <meta name="keywords" content="Kumbh Map, Tent City Kumbh Prayagraj, Mahakumbh locations, Prayagraj Kumbh Mela map, Kumbh navigation, Kumbh ghats map, Tent City location, spiritual sites Prayagraj" />
        <link rel="canonical" href="https://tentcitykumbh.com/kumbh-map" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "Kumbh Map",
            "url": "https://tentcitykumbh.com/kumbh-map",
            "telephone": "+91 9318473156",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Prayagraj",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "India"
            },
            "description": "Navigate the Mahakumbh with the Kumbh Map featuring locations like Tent City Kumbh, ghats, and other key spots in Prayagraj for a seamless spiritual journey."
          })}
        </script>
      </Helmet>


      <TopBanner />
      <Navbar />
      <KumbhMap />
      <Footer />
      <SocialMediaFixed />
    </>
  )
}

export default KumbhMapPage
