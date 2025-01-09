import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'
import TopBanner from '../components/top-banner'
import TransportBooking from '../components/transport-booking'

const TransportBookingPage = () => {
  return (
    <>
      <Helmet>
        <title>Transport Booking - Tent City Kumbh Prayagraj</title>
        <meta name="description" content="Book your transport for Mahakumbh at Tent City Kumbh, Prayagraj. Hassle-free travel arrangements for pilgrims to the spiritual event." />
        <meta name="keywords" content="Transport Booking Mahakumbh, Kumbh Mela transport, Prayagraj transport services, Tent City travel arrangements, Mahakumbh travel booking" />
        <link rel="canonical" href="https://tentcitykumbh.com/mahakumbh/transport-booking" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAction",
            "url": "https://tentcitykumbh.com/mahakumbh/transport-booking",
            "name": "Transport Booking for Mahakumbh",
            "description": "Secure your transport to Tent City Kumbh Prayagraj for Mahakumbh. Simplified travel solutions for pilgrims attending the grand spiritual gathering.",
            "telephone": "+91 9318473156",
            "provider": {
              "@type": "TravelAgency",
              "name": "Tent City Kumbh Transport Services",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Prayagraj, Uttar Pradesh",
                "addressCountry": "India"
              }
            }
          })}
        </script>
      </Helmet>



      <TopBanner />
      <Navbar />
      <TransportBooking />
      <Footer />
      <SocialMediaFixed />
    </>
  )
}

export default TransportBookingPage
