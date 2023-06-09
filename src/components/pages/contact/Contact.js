// import "../../../App.css";

import React, { useState } from "react";
import "./Contact.css";
import "../../../App.css";
import {db} from "../../../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can send the form data to a server or perform any other actions


    db.collection('contacts').add({ 
      name: name,
      email: email,
      message: message,
    });
  
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="connect">
        <h3>Connect With Us</h3>
        <div className="connect-links">
          <a href="mailto:info@example.com">Email</a>
          <a href="tel:+1234567890">Phone</a>
          <a href="https://www.facebook.com/example">Facebook</a>
          <a href="https://www.twitter.com/example">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
