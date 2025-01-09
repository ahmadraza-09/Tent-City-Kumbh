import React from 'react'
import { useNavigate } from "react-router-dom";
import '../css/mahakumbh.css'

const Mahakumbh = () => {
  const navigate = useNavigate();
  return (
    <section className='mahakumbh-section'>
      <h1>Book Mahakumbh Sprituality</h1>
      <br />
      <div className="mahakumbh-boxes-container">
        <div className={`mahakumbh-box mahakumbh-box1`} onClick={() => {
          navigate("/mahakumbh/tent-booking");
        }}>
          <div className="mahakumbh-box-content" >
            <h2>Tent Booking</h2>
          </div>
        </div>
        <div className={`mahakumbh-box mahakumbh-box2`} onClick={() => {
          navigate("/mahakumbh/shahi-snan");
        }}>
          <div className="mahakumbh-box-content">
            <h2>Shahi Snan</h2>
          </div>
        </div>
        <div className={`mahakumbh-box mahakumbh-box3`} onClick={() => {
          navigate("/mahakumbh/hotel-booking");
        }}>
          <div className="mahakumbh-box-content">
            <h2>Hotel Booking</h2>
          </div>
        </div>
        <div className={`mahakumbh-box mahakumbh-box4`} onClick={() => {
          navigate("/mahakumbh/transport-booking");
        }}>
          <div className="mahakumbh-box-content">
            <h2>Transport</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mahakumbh
