import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'
import TopBanner from '../components/top-banner'
import ShahiSnan from '../components/shahi-snan'
import HowToReach from '../components/how-to-reach'
import Attraction from '../components/attraction'

const ShahiSnanPage = () => {
  return (
    <>
      <Helmet>
        <title>Shahi Snan - Tent City Kumbh Prayagraj</title>
        <meta name="description" content="Experience the holy Shahi Snan at Mahakumbh in Tent City Kumbh, Prayagraj. Participate in this auspicious spiritual ritual guided by tradition and devotion." />
        <meta name="keywords" content="Shahi Snan Mahakumbh, Tent City Prayagraj Shahi Snan, Kumbh Mela Shahi Snan, holy bath Mahakumbh, Shahi Snan schedule, spiritual rituals Prayagraj" />
        <link rel="canonical" href="https://tentcitykumbh.com/mahakumbh/shahi-snan" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Shahi Snan",
            "url": "https://tentcitykumbh.com/mahakumbh/shahi-snan",
            "startDate": "2025-01-14", // Replace with the actual date
            "endDate": "2025-01-14", // Replace with the actual date
            "location": {
              "@type": "Place",
              "name": "Tent City Kumbh, Prayagraj",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Prayagraj, Uttar Pradesh",
                "addressCountry": "India"
              }
            },
            "description": "Participate in the sacred Shahi Snan at Mahakumbh, Prayagraj, organized by Tent City Kumbh. Experience the spiritual grandeur of this holy event.",
            "organizer": {
              "@type": "Organization",
              "name": "Tent City Kumbh",
              "url": "https://tentcitykumbh.com",
              "telephone": "+91 9318473156"
            }
          })}
        </script>
      </Helmet>



      <TopBanner />
      <Navbar />
      <ShahiSnan />
      <HowToReach />
      <Attraction />
      <Footer />
      <SocialMediaFixed />
    </>
  )
}

export default ShahiSnanPage
