import React from 'react'
import '../css/kumbh-map.css'
import KumbhTouristMap from '../assets/kumbh-map/kumbh-map.png'

const KumbhMap = () => {
    return (
        <section className='kumbh-map-section'>
            <img src={KumbhTouristMap} alt="" />
            <br />
            <h1>Kumbh Google Map</h1>
            <br />
            <iframe
                className="gmap_iframe"
                width="100%"
                height="400px"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14412.488812784863!2d81.88706847103147!3d25.434177681408674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39854b0b2f2e574f%3A0xadfd2b86aabbdd2b!2sKumbh%20Mela!5e0!3m2!1sen!2sin!4v1736160239504!5m2!1sen!2sin"
            ></iframe>

        </section>
    )
}

export default KumbhMap
