import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'
import TopBanner from '../components/top-banner'
import Tent from '../components/tent-booking'
import HotelBooking from '../components/hotel-booking'

const HotelBookingPage = () => {
  return (
    <>
      <Helmet>
        <title>Mahakumbh - Tent City Kumbh Prayagraj</title>
        <meta name="description" content="Experience the spiritual essence of Mahakumbh at Tent City Kumbh Prayagraj. Learn about the significance, rituals, and cultural events of the grand festival." />
        <meta name="keywords" content="Mahakumbh Prayagraj, Tent City Kumbh festival, Kumbh Mela significance, spiritual events Prayagraj, Kumbh rituals, Mahakumbh cultural highlights" />
        <link rel="canonical" href="https://tentcitykumbh.com/mahakumbh" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Mahakumbh at Tent City Kumbh",
            "url": "https://tentcitykumbh.com/mahakumbh",
            "description": "Discover the grand festival of Mahakumbh at Tent City Kumbh, Prayagraj. Explore its spiritual significance, rituals, and cultural highlights.",
            "location": {
              "@type": "Place",
              "name": "Tent City Kumbh",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Prayagraj",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "",
                "addressCountry": "India"
              }
            },
            "startDate": "2025-01-13",
            "endDate": "2025-02-26",
            "organizer": {
              "@type": "Organization",
              "name": "Tent City Kumbh",
              "url": "https://tentcitykumbh.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 9318473156",
                "contactType": "customer service"
              }
            }
          })}
        </script>
      </Helmet>


      <TopBanner />
      <Navbar />
      <HotelBooking />
      <Footer />
      <SocialMediaFixed />
    </>
  )
}

export default HotelBookingPage
