import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./contact-form.style.scss";
import ActionAlerts from "../alert/alert.component";

const ContactUs = () => {
  // componentを表示するかしないか
  const [whichAlert, setWhichAlert] = React.useState(false);

  const successAlert = () => {
    setWhichAlert(true);
  };

  const failAlert = () => {
    setWhichAlert(false);
  };

  // 最初alertが表示か非表示か
  const [showAlert, setShowAlert] = React.useState(false);

  const showAlertComponent = () => {
    setShowAlert(true);
  }

    const hideAlertComponent = () => {
      setShowAlert(false);
    };
  

  const sendEmail  =  (e)  => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_waygfht", 
        "template_ui5slu8", 
        e.target,
        "user_3elTiMtqMmH9RkopqS50M"
      )
      .then(
        (result) => {
          console.log(result.text);
          successAlert(); 
          showAlertComponent();
        },
        (error) => {
          console.log(error.text);
          failAlert(); 
          showAlertComponent();
        }
      );
  };

  return (
    <div className="contact-container">
      <div className={`${showAlert ? "show-alert" : "hide-alert"}`}>
        {whichAlert ? (
          <ActionAlerts
            message="Your message has been sent!Thank you."
            severity="success"
          />
        ) : (
          <ActionAlerts
            message="Your message has been failed! Please try agin."
            severity="error"
          />
        )}
      </div>
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
};

export default ContactUs;