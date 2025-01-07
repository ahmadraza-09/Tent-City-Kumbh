import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import  KumbhGallery from '../components/kumbh-gallery'
import SocialMediaFixed from '../components/socialmedia-fixed'
import TopBanner from '../components/top-banner'

const EcoRetreatGalleryPage = () => {
  

  return (
    <>
      <TopBanner />
      <Navbar />
      <KumbhGallery />
      <Footer />
      <SocialMediaFixed/>
    </>
  );
}

export default EcoRetreatGalleryPage;
