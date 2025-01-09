import React from 'react'
import ShahiSnanImg from '../assets/mahakumbh/shahi-snan.webp'
const ShahiSnan = () => {
    return (
        <section className='shahi-snan-section'>
            <div className="mahakumbh-welcome">
                <h4>Welcome To</h4>
                <h1> Shahi Snan <span>Mahakumbh</span></h1>
                <p>Shahi Snan in Mahakumbh is a divine ritual for purification and blessings.</p>
            </div>
            <div className="mahakumbh-shahi-snan">
                <h2>Important Dates - <span>Shahi Snan</span></h2>
                <ul className="mahakumbh-shahi-snan-content">
                    <li>&#x2022; 13 January 2025 <span>Paush Poornima (Important Bathing)</span></li>
                    <li>&#x2022; 14 January &nbsp;&nbsp;2025 <span>Makar Sankranti (Royal Bathing / Shahi Snan)</span></li>
                    <li>&#x2022; 29 January &nbsp;2025 <span>Mauni Amavasya (Royal Bathing / Shahi Snan)</span></li>
                    <li>&#x2022; 03 February 2025 <span>Basant Panchami (Royal Bathing / Shahi Snan)</span></li>
                    <li>&#x2022; 04 February 2025 <span>Achla Saptami (Important Bathing)</span></li>
                    <li>&#x2022; 12 February &nbsp;2025 <span>Maghi Poornima (Important Bathing)</span></li>
                    <li>&#x2022; 26 February 2025 <span>Maha Shivratri (Important Bathing)</span></li>
                </ul>
            </div>
            <div className="mahakumbh-important-things">
                <h2>
                    Important Things Before Booking - <span>Shahi Snan</span>
                </h2>
                <div className="mahakumbh-important-things-container">
                    <img src={ShahiSnanImg} alt="" />
                    <div className="shahi-snan-details">
                        <p>
                            Guests who book Shahi Snan on important dates will be allowed to
                            perform the ritual after the Akhada's complete their Shahi Snan
                            ceremony.
                        </p>
                        <br />
                        <p>
                            The Shahi Snan for Akhada members generally starts early in the
                            morning around <strong>3 AM or 4 AM</strong>. Once their ritual is
                            complete, guests will have the opportunity to perform their
                            Snan on the same day.
                        </p>
                        <br />
                        <p>
                            Ensure you book on the designated Shahi Snan dates to experience this
                            sacred and spiritually enriching ritual.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ShahiSnan
