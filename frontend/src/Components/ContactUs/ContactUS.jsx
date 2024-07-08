import React, { Fragment, useState } from 'react';
import './ContactUs.css';
import Footer from '../Footer/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    contactname: '',
    contactemail: '',
    contactnumber: '',
    message: '',
    advertisement: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/v1/new/contactus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setResponseMessage('Thank you for contacting us!');
        setFormData({
          contactname: '',
          contactemail: '',
          contactnumber: '',
          message: '',
          advertisement: false,
        });
      } else {
        setResponseMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Fragment>
      <div className="contact-us-container">
        <div className="left">
          <h2>CONTACT US</h2>
          <p>Get in touch with Ajantha Cinemas!</p>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="totalform">
            <div className="forms-groups">
              <input 
                type="text"
                name="contactname"
                placeholder="Name"
                value={formData.contactname}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="contactnumber"
                placeholder="Mobile Number"
                value={formData.contactnumber}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="contactemail"
              placeholder="Email"
              value={formData.contactemail}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="advertisement-note-container">
              <input
                type="checkbox"
                name="advertisement"
                checked={formData.advertisement}
                onChange={handleChange}
              />
              <p className="advertisement-note">Regarding Advertisement</p>
            </div>
            <div className="contactbutton">
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            </div>
            {responseMessage && <p>{responseMessage}</p>}
          </div>
        </form>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default ContactUs;
