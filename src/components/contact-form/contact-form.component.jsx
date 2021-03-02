import React from "react";
import emailjs from "emailjs-com";

import "./contact-form.style.scss";

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_btiolc4",
        "template_raro4bx",
        e.target,
        "user_3elTiMtqMmH9RkopqS50M"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <span>
        Please fill this form out.
        <br />
        We will reach you in a three days
      </span>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="group-contact">
          <input
            className="form-input-contact"
            type="hidden"
            name="contact_number"
          />
          <label className="form-input-label-contact name">Name</label>
          <input className="form-input-contact" type="text" name="user_name" />
          <label className="form-input-label-contact email">Email</label>
          <input
            className="form-input-contact"
            type="email"
            name="user_email"
          />
          <label className="form-input-label-contact message">Message</label>
          <textarea className="form-input-contact message" name="message" />
          <input type="submit" value="Send" className="custom-button-contact" />
        </div>
      </form>
    </div>
  );
}
