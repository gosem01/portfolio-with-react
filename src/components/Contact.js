import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // send form data to server or do something else with it
  };

  useEffect(() => {
    if (window.location.hash === '#contact') {
      setShowForm(true);
    }

    window.onhashchange = () => {
      if (window.location.hash === '#contact') {
        setShowForm(true);
      } else {
        setShowForm(false);
      }
    };
  }, []);

  if (!showForm) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} />

      <label htmlFor="message">Message:</label>
      <textarea id="message" value={message} onChange={handleMessageChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;