import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "../css/tent-booking.css";
import tentBooking from "../data/tent-booking-data";

const TransportBooking = () => {
    const { location } = useParams();
    const {
        name = "Eco Retreat",
        location: retreatLocation = "Mahakumbh",
        images = [],
        transports = [],
        cottages = [],
        activities = [],
        howToReach = {},
        topAttractions = [],
    } = tentBooking;

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [images]);




    return (
        <section className="mahakumbh-section">
            <div className="mahakumbh-welcome">
                <h4>Welcome To</h4>
                <h1>Transport Booking <span>{retreatLocation}</span></h1>
                <p>Mahakumbh: World's largest spiritual gathering at Prayagraj's sacred Sangam.</p>
            </div>

            {/* Transport Booking */}
            <div className="transport-booking">
                <div className="transport-booking-container">
                    {transports.map((transport, index) => (
                        <div key={index} className={`transport-box transport-box${index + 1}`}>
                            <div className="transport-box-content">
                                <h2>{transport.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* How to Reach Section */}
            <div className="mahakumbh-how-to-reach">
                <h4>Destination</h4>
                <h2>How to Reach <span>Mahakumbh</span></h2>
                <br />
                <div className="mahakumbh-how-to-reach-container">
                    <div className="mahakumbh-how-to-reach-container-left">
                        <img src={howToReach.destinationImage} alt="Destination" />
                    </div>
                    <div className="mahakumbh-how-to-reach-container-right">
                        <div className="travel-info">
                            {howToReach.byAir && (
                                <div className="travel-section">
                                    <h3>By Air</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Airport</th>
                                                <th>Distance</th>
                                                <th>Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {howToReach.byAir.map((airport, index) => (
                                                <tr key={index}>
                                                    <td>{airport.airport}</td>
                                                    <td>{airport.distance}</td>
                                                    <td>{airport.time}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                            {howToReach.byRail && (
                                <div className="travel-section">
                                    <h3>By Rail</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Railway Station</th>
                                                <th>Distance</th>
                                                <th>Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {howToReach.byRail.map((station, index) => (
                                                <tr key={index}>
                                                    <td>{station.station}</td>
                                                    <td>{station.distance}</td>
                                                    <td>{station.time}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                            {howToReach.byRoad && (
                                <div className="travel-section">
                                    <h3>By Road</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>City</th>
                                                <th>Kilometers</th>
                                                <th>Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {howToReach.byRoad.map((city, index) => (
                                                <tr>
                                                    <td>{city.city}</td>
                                                    <td>{city.distance}</td>
                                                    <td>{city.time}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

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

export default TransportBooking;
