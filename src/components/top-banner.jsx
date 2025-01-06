import React from "react";
import "../css/navbar.css";

const TopBanner = () => {
  return (
    <div className="top-banner">
      <div className="top-banner-left">
        <div className="phone">
          <i class="fa-solid fa-phone"></i>
          <a
            href="tel:+919318473156"
            target="_blank"
            aria-label="call us for hotel booking"
          >
            +91 9318473156
          </a>
        </div>
        <div className="phone">
          <i class="fa-solid fa-phone"></i>
          <a
            href="tel:+919650605101"
            target="_blank"
            aria-label="call us for hotel booking"
          >
            +91 9650605101
          </a>
        </div>
        <div className="email">
          <i class="fa-solid fa-envelope"></i>
          <a
            href="mailto:kumbh@tentcitykumbh.com"
            target="_blank"
            aria-label="mail us for hotel booking"
          >
            kumbh@tentcitykumbh.com
          </a>
        </div>
      </div>

      <div className="top-banner-right">
        <a
          href="https://www.instagram.com/ram_raj_holidays/"
          target="_blank"
          aria-label="follow us on instagram"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/ramrajholidays"
          target="_blank"
          aria-label="follow us on facebook"
        >
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.youtube.com/@RamRajHolidays"
          target="_blank"
          aria-label="follow us on youtube"
        >
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default TopBanner;
