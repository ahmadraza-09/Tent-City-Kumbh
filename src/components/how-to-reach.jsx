import React from 'react';
import { useParams } from "react-router-dom";
import "../css/tent-booking.css";
import tentBooking from "../data/tent-booking-data";

const HowToReach = () => {
    const { location } = useParams();
    const {
        location: retreatLocation = "Mahakumbh",
        howToReach = {},
    } = tentBooking;
    return (
        <section>
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
        </section>
    );
};

export default HowToReach;
