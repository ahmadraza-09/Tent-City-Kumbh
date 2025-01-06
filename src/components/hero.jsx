import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/hero.css';

import hero1 from '../assets/hero/hero1.png';
import hero2 from '../assets/hero/hero2.png';
import hero3 from '../assets/hero/hero3.png';
import hero4 from '../assets/hero/hero4.png';
import hero5 from '../assets/hero/hero5.png';
import hero7 from '../assets/hero/hero7.jpg';
import hero8 from '../assets/hero/hero8.jpg';   


const Hero = () => {
    const images = [hero1, hero2, hero3, hero4, hero5, hero7, hero8];
    const services = ['Tent', 'Hotel', 'Transport', 'Personal Guide', 'Tent', 'Hotel', 'Transport', 'Personal Guide'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchInput, setSearchInput] = useState('');
    const [filteredServices, setFilteredServices] = useState(services);

    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Update image and text every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        if (searchInput === '' || services.includes(searchInput)) {
            setFilteredServices([]); // Hide suggestions if the input matches a place or is empty
        } else {
            const filtered = services.filter((place) =>
                place.toLowerCase().includes(searchInput.toLowerCase()) // Filter services based on input
            );
            setFilteredServices(filtered);
        }
    }, [searchInput]);

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value); // Update search input
    };

    const handleLocationSelect = (location) => {
        setSearchInput(location); // Set the input to selected location
        setFilteredServices([]); // Hide suggestions
    };

    const handleExplore = () => {
        if (services.includes(searchInput)) {
            navigate(`/eco-retreat/${searchInput.toLowerCase()}`); // Navigate to the location route
        } else {
            alert('Please select a valid location from the suggestions.'); // Show alert if location is invalid
        }
    };

    return (
        <div className="hero-section">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${images[currentIndex]})`,
                }}
            >
                <div className="overlay">
                    <div className="hero-container">
                        <div className="hero-container-left">
                            <h1>Book Your</h1>
                            <h1 className="slide-text">
                                Kumbh <span key={currentIndex}>{services[currentIndex]}</span>
                            </h1>
                            <div className="search-destination-container">
                                <div className="search-destination-texts">
                                    <span>Sacred</span>
                                    <span>Spirituality</span>
                                    <span>Gathering</span>
                                    <span>Pilgrimage</span>
                                </div>
                                <p className="search-destination-description">Mahakumbh 2025: Ekta, Aastha aur Sanskriti ka Mahaparv!</p>
                                <div className="search-destination-search">
                                    <input
                                        type="text"
                                        value={searchInput}
                                        onChange={handleSearchChange}
                                        placeholder="Type Mahakumbh..."
                                    />
                                    <button onClick={handleExplore}>Explore</button>
                                    {/* Show suggestions when input does not match a valid place */}
                                    {searchInput && filteredServices.length > 0 && (
                                        <ul className="suggestions-list">
                                            {filteredServices.map((place) => (
                                                <li
                                                    key={place}
                                                    onClick={() => handleLocationSelect(place)} // Select a location
                                                >
                                                    {place}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="hero-container-right">
                            {/* Additional content if needed */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
