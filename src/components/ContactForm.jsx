import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [alert, setAlert] = useState({
        message: "",
        type: "", // "success" | "error"
        visible: false
    });

    const timeoutRef = useRef(null);

    const showAlert = (message, type) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setAlert({
            message,
            type,
            visible: true
        });

        timeoutRef.current = setTimeout(() => {
            setAlert({
                message: "",
                type: "",
                visible: false
            });
        }, 3000);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            showAlert("Message sent successfully!", "success");

            setFormData({
                name: "",
                email: "",
                message: ""
            });
        })
        .catch((error) => {
            console.error("FAILED...", error);
            showAlert("Something went wrong. Try again.", "error");
        });
    };

    const closeAlert = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setAlert({
            message: "",
            type: "",
            visible: false
        });
    };

    return (
        <>
            {alert.visible && (
                <div className="contact-alert-overlay">
                    <div className={`contact-alert ${alert.type}`}>
                        <span className="contact-alert-message">
                            {alert.message}
                        </span>

                        <button
                            type="button"
                            className="contact-alert-close"
                            onClick={closeAlert}
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                    />
                </div>

                <div className="contact-form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                    />
                </div>

                <div className="contact-form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        rows="6"
                        required
                    />
                </div>

                <button type="submit" className="contact-form-button">
                    Send Message
                </button>
            </form>
        </>
    );
}

export default ContactForm;