import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you! Reach out to us via the form or through the contact details below.</p>

          <div className="contact-details">
            <p><i className="fas fa-phone"></i> Phone: +123-456-7890</p>
            <p><i className="fas fa-envelope"></i> Email: info@ngo.org</p>
            <p><i className="fas fa-map-marker-alt"></i> Address: 123 NGO St, City, Country</p>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your message" required></textarea>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354344963086!2d144.95592331577413!3d-37.81720927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777dd8f7b0c3a1!2sGoogle%20Australia!5e0!3m2!1sen!2sus!4v1615882329001!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
