import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/navbar.css";
import Logo from "../assets/logo.png";
import FormModal from "./form-modal"; // Import the new component

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [navbarSection, setNavbarSection] = useState(false);
    const [dropdown, setDropdown] = useState({ location: false, gallery: false });
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

    const locations = [
        "Konark",
        "Satkosia",
        "Putsil",
        "Sonapur",
        "Daringbadi",
        "Hirakud",
        "Bhitarkanika",
    ];

    const navbarFixed = () => {
        if (window.scrollY >= 100) {
            setNavbarSection(true);
        } else {
            setNavbarSection(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", navbarFixed);
        return () => window.removeEventListener("scroll", navbarFixed);
    }, []);

    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (type) => {
        setDropdown((prev) => ({ ...prev, [type]: !prev[type] }));
    };

    return (
        <>
            <nav
                className={navbarSection ? "navbar-section activated" : "navbar-section"}
            >
                <div className="logo-section">
                    <img
                        src={Logo}
                        alt=""
                        className={isActive("/")}
                        onClick={() => {
                            navigate("/");
                            setIsOpen(false);
                        }}
                    />
                    <h1
                        className={isActive("/")}
                        onClick={() => {
                            navigate("/");
                            setIsOpen(false);
                        }}
                    >
                        Tent City <br /> <span>Kumbh</span>
                    </h1>
                </div>
                <ul className={`menu-section ${isOpen ? "show-menu" : ""}`}>
                    <li
                        className={isActive("/")}
                        onClick={() => {
                            navigate("/");
                            setIsOpen(false);
                        }}
                    >
                        Home
                    </li>
                    <li
                        className={isActive("/about")}
                        onClick={() => {
                            navigate("/about");
                            setIsOpen(false);
                        }}
                    >
                        About
                    </li>
                    <li
                        className={isActive("/mahakumbh")}
                        onClick={() => {
                            navigate("/mahakumbh");
                            setIsOpen(false);
                        }}
                    >
                        Mahakumbh
                    </li>
                    <li
                        className={isActive("/kumbh-gallery")}
                        onClick={() => {
                            navigate("/kumbh-gallery");
                            setIsOpen(false);
                        }}
                    >
                        Kumbh Gallery 
                    </li>
                    <li
                        className={isActive("/kumbh-map")}
                        onClick={() => {
                            navigate("/kumbh-map");
                            setIsOpen(false);
                        }}
                    >
                        Kumbh Map
                    </li>
                    <li
                        className={isActive("/contact")}
                        onClick={() => {
                            navigate("/contact");
                            setIsOpen(false);
                        }}
                    >
                        Contact
                    </li>
                </ul>
                <div className="button-section">
                    <button onClick={() => setIsModalOpen(true)}>Book Now</button>
                    <div className="menu-bars" onClick={toggleMenu}>
                        {isOpen ? (
                            <i className="fa-solid fa-close"></i>
                        ) : (
                            <i className="fa-solid fa-bars"></i>
                        )}
                    </div>
                </div>
            </nav>
            <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Navbar;
