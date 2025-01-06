import React from "react";
import "../css/form-modal.css"; // Create this CSS file for modal styling

const FormModal = ({ isOpen, onClose }) => {
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

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-form-content swipe">
                <button className="close-button" onClick={onClose}>
                    <i class="fa-solid fa-xmark"></i>
                </button>
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
                    <textarea name="message" placeholder="Enter your query here..." />
                    <button type="submit" name="submit">Send Query</button>
                </form>
            </div>
        </div>
    );
};

export default FormModal;
