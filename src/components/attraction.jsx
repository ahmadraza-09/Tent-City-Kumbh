import React from 'react';
import { useParams } from "react-router-dom";
import "../css/tent-booking.css";
import tentBooking from "../data/tent-booking-data";

const Attraction = () => {
    const { location } = useParams();
    const {
        location: retreatLocation = "Mahakumbh",
        topAttractions = {},
    } = tentBooking;
    return (
        <section>
            {/* Eco Retreat Attractions */}
            <div className="mahakumbh-attractions">
                <h4>Attractions</h4>
                <h2>Top Attractions in <span>Mahakumbh</span></h2>
                <br />
                <div className="mahakumbh-attractions-container">
                    {topAttractions.map((attraction, index) => (
                        <div className="mahakumbh-attractions-box" key={index}>
                            <img src={attraction.image} alt={attraction.name} />
                            <div className="mahakumbh-attractions-box-content">
                                <h3>{attraction.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Attraction;
