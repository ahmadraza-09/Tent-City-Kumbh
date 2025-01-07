import React from 'react'
import '../css/about.css'
import Img from '../assets/hero/hero3.png'
import Mahakumbh from '../assets/hero/hero4.png'

import Surety from '../assets/icon/thumb-up.png'
import Guidance from '../assets/icon/people.png'
import Coordination from '../assets/icon/team.png'
import Advice from '../assets/icon/expert-advice.png'
import CustomerSupport from '../assets/icon/services.png'

const About = () => {
    return (
        <section className='about-section'>
            <h1>Mahakumbh - 2025</h1>
            <h4>Book with Confidence Through Us</h4>
            <div className="about-description-container">
                <div className="about-description-container-left"><img src={Img} alt="" /></div>
                <div className="about-description-container-right">
                    <p>
                        <strong>Mahakumbh</strong> is a Spirituality glamping experience organized by the Government of Uttar Pradesh across Prayagraj.
                    </p>
                    <br />
                    <p>
                        We are <strong>not a government website</strong>, but we provide exclusive services, guidance and tour support to ensure your Mahakumbh experience is seamless and stress-free.
                    </p>
                    <br />
                    <p>
                    This website is managed and owned by  <strong><a href="https://www.ramrajholidays.com/">RamRaj Holidays Pvt. Ltd.</a></strong>, a trusted Travel & DMC partner of Ayodhya ensuring seamless coordination and guidance for your Mahakumbh experience.
                     </p>
                </div>
            </div>
            <div className="mahakumbh-location">
                <h2>Book Mahakumbh</h2>
                <div className="mahakumbh-location-boxes">
                        <h3><div></div>Tent<div></div></h3>
                        <h3><div></div>Shahi Snan<div></div></h3>
                        <h3><div></div>Hotel<div></div></h3>
                        <h3><div></div>Transport<div></div></h3>
                </div>
            </div>
            <div className="why-choose-container">
                <h2>Why Choose Us</h2>
                <div className="why-choose-boxes">
                    <div className="why-choose-box">
                        <img src={Surety} alt="" />
                        <span>Surety <br /> Booking</span>
                    </div>
                    <div className="why-choose-box">
                        <img src={Guidance} alt="" />
                        <span>Dedicated Guidance</span>
                    </div>
                    <div className="why-choose-box">
                        <img src={Coordination} alt="" />
                        <span>Smooth Coordination</span>
                    </div>
                    <div className="why-choose-box">
                        <img src={Advice} alt="" />
                        <span>Expert <br /> Advice</span>
                    </div>
                    <div className="why-choose-box">
                        <img src={CustomerSupport} alt="" />
                        <span>24/7 Customer Support</span>
                    </div>
                </div>
            </div>
            <div className="plan-mahakumbh-container">
                <h2>Plan Your Mahakumbh</h2>
                <div className="plan-mahakumbh-content">
                    <img src={Mahakumbh} alt="" />
                    <p>We are committed to making your Mahakumbh experience memorable. While the kumbh is hosted by the Government of Uttar Pradesh in Prayagraj, we ensure that your booking and travel are managed with care and professionalism.</p>
                </div>
            </div>
            
        </section>
    )
}

export default About
