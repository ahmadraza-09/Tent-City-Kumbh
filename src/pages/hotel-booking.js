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
        <title>Hotel Booking - Tent City Kumbh Prayagraj</title>
        <meta name="description" content="Book your hotel stay for the Mahakumbh at Tent City Kumbh, Prayagraj. Enjoy comfortable accommodations near the grand event with premium facilities." />
        <meta name="keywords" content="Hotel Booking Mahakumbh, Kumbh Mela hotel booking, Prayagraj hotels, Tent City accommodations, Mahakumbh hotel options" />
        <link rel="canonical" href="https://tentcitykumbh.com/mahakumbh/hotel-booking" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingReservation",
            "url": "https://tentcitykumbh.com/mahakumbh/hotel-booking",
            "name": "Hotel Booking for Mahakumbh",
            "description": "Reserve your hotel accommodation for Mahakumbh at Tent City Kumbh Prayagraj. Experience the spiritual gathering with comfortable stays and modern amenities.",
            "telephone": "+91 9318473156",
            "reservationFor": {
              "@type": "LodgingBusiness",
              "name": "Tent City Kumbh Hotels",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Prayagraj, Uttar Pradesh",
                "addressCountry": "India"
              }
            },
            "reservationStatus": "https://schema.org/ReservationPending",
            "checkinTime": "14:00",
            "checkoutTime": "12:00"
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
