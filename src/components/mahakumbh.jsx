import React from 'react'
import '../css/mahakumbh.css'

const Mahakumbh = () => {
  return (
    <section className='mahakumbh-section'>
      <h1>Book Mahakumbh Sprituality</h1>
      <br />
      <div className="mahakumbh-boxes-container">
        <div className={`mahakumbh-box mahakumbh-box1`} >
          <div className="mahakumbh-box-content">
            <h2>Tent Booking</h2>
          </div>
        </div>
        <div className={`mahakumbh-box mahakumbh-box2`} >
          <div className="mahakumbh-box-content">
            <h2>Shahi Snan</h2>
          </div>
        </div>
        <div className={`mahakumbh-box mahakumbh-box3`} >
          <div className="mahakumbh-box-content">
            <h2>Hotel</h2>
          </div>
        </div>
        <div className={`mahakumbh-box mahakumbh-box4`} >
          <div className="mahakumbh-box-content">
            <h2>Transport</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mahakumbh
