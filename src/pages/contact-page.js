import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Contact from '../components/contact'
import SocialMediaFixed from '../components/socialmedia-fixed'
import TopBanner from '../components/top-banner'

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Tent City Kumbh Prayagraj</title>
        <meta name="description" content="Get in touch with Tent City Kumbh for inquiries, bookings, or assistance regarding your stay during Mahakumbh at Prayagraj." />
        <meta name="keywords" content="Contact Tent City Kumbh, Kumbh Mela inquiries, Prayagraj accommodations contact, Tent City bookings, Mahakumbh support" />
        <link rel="canonical" href="https://tentcitykumbh.com/contact" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": "https://tentcitykumbh.com/contact",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 9318473156",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Prayagraj",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "",
              "addressCountry": "India"
            }
          })}
        </script>
      </Helmet>


      <TopBanner />
      <Navbar />
      <Contact />
      <Footer />
      <SocialMediaFixed />
    </>
  )
}

export default ContactPage
