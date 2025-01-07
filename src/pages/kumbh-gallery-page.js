import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import KumbhGallery from '../components/kumbh-gallery'
import SocialMediaFixed from '../components/socialmedia-fixed'
import TopBanner from '../components/top-banner'

const EcoRetreatGalleryPage = () => {


  return (
    <>
      <Helmet>
        <title>Kumbh Gallery - Tent City Kumbh Prayagraj</title>
        <meta name="description" content="Discover the vibrant moments of Mahakumbh through our Kumbh Gallery. Explore images of Tent City Kumbh, cultural events, ghats, and spiritual experiences in Prayagraj." />
        <meta name="keywords" content="Kumbh Gallery, Tent City Kumbh Prayagraj photos, Mahakumbh images, Kumbh Mela pictures, Prayagraj ghats gallery, spiritual experiences gallery, cultural events Kumbh" />
        <link rel="canonical" href="https://tentcitykumbh.com/kumbh-gallery" />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Kumbh Gallery",
            "url": "https://tentcitykumbh.com/kumbh-gallery",
            "telephone": "+91 9318473156",
            "description": "A collection of photos showcasing the Mahakumbh at Tent City Kumbh, including cultural highlights, ghats, and spiritual celebrations in Prayagraj.",
            "location": {
              "@type": "Place",
              "name": "Tent City Kumbh",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Prayagraj",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "India"
              }
            }
          })}
        </script>
      </Helmet>

      <TopBanner />
      <Navbar />
      <KumbhGallery />
      <Footer />
      <SocialMediaFixed />
    </>
  );
}

export default EcoRetreatGalleryPage;
