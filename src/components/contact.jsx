import React from 'react';
import '../css/contact.css';
import ContactImg from '../assets/hero/hero7.jpg';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
        })
            .then((response) => {
                if (response.ok) {
                    window.location.href = "/thanks";
                } else {
                    alert("There was an issue submitting the form. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Form submission error:", error);
                alert("An error occurred while submitting the form.");
            });
    };

    return (
        <section className='contact-section'>
            <div className="contact-container">
                <div className="contact-container-left">
                    <img src={ContactImg} alt="" />
                </div>
                <div className="contact-container-right">
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <h2>QUERY FORM</h2>
                        <input
                            type="hidden"
                            name="subject"
                            value="Tent City Kumbh"
                        />
                        <input
                            type="hidden"
                            name="from_name"
                            value="Query Tent City Kumbh"
                        />
                        <input
                            type="hidden"
                            name="access_key"
                            value="a867452c-f75f-4239-9f04-565dfe2dabac"
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                        <input
                            type="text"
                            name="mobilenumber"
                            placeholder="Enter your mobile number"
                            pattern="[0-9]{10}"
                            required
                        />

                        {/* Message Textarea */}
                        <textarea name="message" placeholder="Enter your query here..." />

                        {/* Submit Button */}
                        <button type="submit" name="submit">
                            Send Query
                        </button>
                    </form>
                </div>
            </div>
            <div className="contact-detail-container">
                <p>
                    <i class="fa-solid fa-map-marker-alt"></i>
                    <p>
                        <span>Ayodhya Office</span>
                        Near Shanti Oil Mill, Housla Nagar Colony, Modha,
                        Ayodhya Dham Uttar Pradesh - 224001
                    </p>
                </p>
                <p>
                    <i class="fa-solid fa-phone"></i>
                    <a href="tel:9318473156">+91 9318473156</a>
                </p>
                <p>
                    <i class="fa-solid fa-envelope"></i>
                    <a href="mailto:kumbh@tentcitykumbh.com">
                        kumbh@tentcitykumbh.com
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Contact;
