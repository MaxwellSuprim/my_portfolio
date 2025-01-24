import React, { useState } from 'react';
import PageHeaderContent from '../../components/header';
import { IoIosContacts } from "react-icons/io";
import { FaLinkedin, FaGithub, FaWhatsapp,FaCommentDots } from 'react-icons/fa';
import emailjs from 'emailjs-com'; // Import EmailJS library
import './styles.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS service details
        const serviceId = 'service_tsrqp7o'; // Replace with your actual service ID
        const templateId = 'template_3fq2syz'; // Replace with your actual template ID
        const userId = 'ZvfVXzCFgqEK_BKAs'; // Replace with your actual public key (user ID)

        // Send email using EmailJS
        emailjs
            .send(serviceId, templateId, formData, userId)
            .then(
                (result) => {
                    console.log('Email sent successfully:', result.text);
                    setStatus('Thank you for reaching out. I will get back to you soon!');
                },
                (error) => {
                    console.error('Error sending email:', error.text);
                    setStatus('Oops! Something went wrong. Please try again later.');
                }
            );

        // Clear form after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="Contact"
                icon={<IoIosContacts size={39} />}
            />
            <div className="contact-container">
                <div className="form-container">
                    <h2>Get in Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            Send Message
                        </button>
                    </form>
                    {status && <p className="status-message">{status}</p>}
                </div>
                <div className="social-container">
                    <h2>Connect with Me</h2>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/suprim-thapa-b034aa196/" target="_blank" rel="noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://github.com/MaxwellSuprim" target="_blank" rel="noreferrer">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://wa.me/17058176797" target="_blank" rel="noreferrer">
                            <FaWhatsapp size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
