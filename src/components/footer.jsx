import React from 'react'
import { useNavigate } from "react-router-dom";
import '../css/footer.css'

import Logo from '../assets/logo.png';

import Instagram from '../assets/icon/instagram.webp';
import Twitter from '../assets/icon/twitter.png';
import Youtube from '../assets/icon/youtube.webp';
import Whatsapp from '../assets/icon/whatsapp.png';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer >
            <div className='footer-section'>
                <ul className="footer-container">
                    <div className="footer-logo" onClick={() => {
                        navigate("/");
                    }}>
                        <img src={Logo} alt="" />
                        <h2>Tent City <br /> <span>Kumbh</span></h2>
                    </div>
                    <div className="contact-details">
                        <span><i class="fa-solid fa-location-dot"></i>G10, Near Nawada Metro Station, Shyam Park, Nawada Majra Village, Nawada, New Delhi, Delhi, 110059</span>
                        <span><i class="fa-solid fa-phone"></i><a href="tel:9318473156">+91 9318473156</a></span>
                        <span><i class="fa-solid fa-phone"></i><a href="tel:9650605101">+91 9650605101</a></span>
                        <span><i class="fa-solid fa-envelope"></i><a href="mailto:kumbh@tentcitykumbh.com">kumbh@tentcitykumbh.com</a></span>
                    </div>
                </ul>
                <ul className="footer-container">
                    <h3>Menu</h3>
                    <li
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Home
                    </li>
                    <li onClick={() => {
                        navigate("/about");
                    }}>About</li>
                    <li onClick={() => {
                        navigate("/mahakumbh");
                    }}>Mahakumbh</li>
                    <li onClick={() => {
                        navigate("/kumbh-gallery");
                    }}>Kumbh Gallery</li>
                    <li onClick={() => {
                        navigate("/kumbh-map");
                    }}>Kumbh Map</li>
                    <li onClick={() => {
                        navigate("/contact");
                    }}>Contact</li>
                    <li>Help</li>
                </ul>
                <ul className="footer-container">
                    <h3>Get Help</h3>
                    <li>FAQ's</li>
                    <li onClick={() => {
                        navigate("/contact");
                    }}>Contact</li>
                    <li>Privacy Policy</li>
                    <li>Cancellation & <br /> Refund Policy</li>
                </ul>
                <ul className="footer-container">
                    <h3>Mahakumbh</h3>
                    <li onClick={() => {
                        navigate("/tent-booking");
                    }}>Tent Booking</li>
                    <li onClick={() => {
                        navigate("/mahakumbh/hotel-booking");
                    }}>Hotel Booking</li>
                    <li onClick={() => {
                        navigate("/mahakumbh/shahi-snan");
                    }}>Shahi Snan</li>
                    <li onClick={() => {
                        navigate("/mahakumbh/transport-booking");
                    }}>Transport Booking</li>
                    <li>Personal Guide</li>
                    
                </ul>
                <ul className="footer-container">
                    <h3>Connect With Us</h3>
                    <div className="footer-social">
                        <a href="https://www.instagram.com/tentcitykumbh/" target='_blank'><img src={Instagram} alt="" /></a>
                        <a href="https://x.com/tentcitykumbh" target='_blank'><img src={Twitter} alt="" /></a>
                        <a href="https://www.youtube.com/@tentcitykumbh" target='_blank'><img src={Youtube} alt="" /></a>
                        <a href="https://api.whatsapp.com/send?phone=919318473156&text=Hello!%20I%20have%20query%20regarding%20Mahakumbh%202025." target='_blank'><img src={Whatsapp} alt="" /></a>
                    </div>
                </ul>
            </div>

            <div className="footer-copyright">
                <div className="footer-copyright-left">
                    <p>
                        Managed by{" "}
                        <a href="https://ramrajholidays.com" target="_blank">
                            RamRaj Holidays Pvt Ltd
                        </a>
                    </p>{" "}
                    <img src="" alt="" loading="lazy" />
                </div>

                <div className="footer-copyright-right">
                    All Rights Reserved -{" "}
                    <a href="https://tentcitykumbh.com" target="_blank">
                        Tent City Kumbh
                    </a>{" "}
                    © 2024
                </div>
            </div>
        </footer>
    )
}

export default Footer
