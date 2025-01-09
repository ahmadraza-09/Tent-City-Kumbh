import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'
import TopBanner from '../components/top-banner'
import Tent from '../components/tent-booking'

const TentBookingPage = () => {
  return (
    <>
      <Helmet>
        <title>Tent Booking - Tent City Kumbh Prayagraj</title>
        <meta name="description" content="Book your tent for the Mahakumbh at Tent City Kumbh, Prayagraj. Choose from a variety of tent options and experience the sacred gathering in comfort and style." />
        <meta name="keywords" content="Tent Booking Mahakumbh, Kumbh Mela tent booking, Prayagraj accommodations, Tent City booking, Mahakumbh tent options" />
        <link rel="canonical" href="https://tentcitykumbh.com/mahakumbh/tent-booking" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Reservation",
            "url": "https://tentcitykumbh.com/mahakumbh/tent-booking",
            "name": "Tent Booking for Mahakumbh",
            "description": "Book your tent for Mahakumbh at Tent City Kumbh Prayagraj. Explore various tent options and reserve your spot for the grand event.",
            "telephone": "+91 9318473156",
            "reservationFor": {
              "@type": "Event",
              "name": "Mahakumbh Prayagraj",
              "startDate": "2025-01-14",
              "endDate": "2025-02-14",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "location": {
                "@type": "Place",
                "name": "Tent City Kumbh",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Prayagraj, Uttar Pradesh",
                  "addressCountry": "India"
                }
              }
            }
          })}
        </script>
      </Helmet>



      <TopBanner />
      <Navbar />
      <Tent />
      <Footer />
      <SocialMediaFixed />
    </>
  )
}

export default TentBookingPage
