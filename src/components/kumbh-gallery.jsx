import React, { useState, useEffect } from "react";
import "../css/kumbh-gallery.css";
import kumbhGalleryData from "../data/kumbh-gallery-data";

const KumbhGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);

    const images = kumbhGalleryData.Gallery;

    useEffect(() => {
        if (images.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 4000);

            return () => clearInterval(interval);
        }
    }, [images.length]);

    const openModal = (index) => {
        setModalIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const prevSlide = () => {
        setModalIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setModalIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    if (!images.length) {
        return <div>No images available for the gallery.</div>;
    }

    return (
        <section className="kumbh-gallery-section">
            {/* Hero Section */}
            <div className="kumbh-gallery-hero">
                <div
                    className="kumbh-gallery-background-image"
                    style={{
                        backgroundImage: `url(${images[currentIndex]})`,
                    }}
                ></div>
                <div className="kumbh-gallery-hero-overlay">
                    <h1>Mahakumbh 2025 - Gallery</h1>
                    <h4>Discover Mahakumbh 2025 through our gallery.</h4>
                </div>
            </div>

            {/* Gallery Images */}
            <div className="kumbh-gallery-gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Kumbh Gallery Image ${index + 1}`}
                        className="gallery-thumbnail"
                        onClick={() => openModal(index)}
                    />
                ))}
            </div>

            {/* Modal for Fullscreen Image */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <button className="modal-prev" onClick={prevSlide}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <img
                            src={images[modalIndex]}
                            alt={`Kumbh Gallery Fullscreen Image`}
                            className="modal-image"
                        />
                        <button className="modal-next" onClick={nextSlide}>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default KumbhGallery;
