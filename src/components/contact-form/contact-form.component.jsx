import React from "react";
import "./contact-form.style.scss";

import FormInput from "../form-input/form-input.componnet";
import CustomButton from "../custom-button/custom-button.component";

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      message: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { fullName, email, message } = this.state;
    if (fullName == "" && email == "" && message == "") {
      alert("入力内容に不具合があります");
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  submitContactForm = () => {};

  render() {
    const { fullName, email, message } = this.state;

    return (
      <div className="contact">
        <h2 className="title">Contact Us</h2>
        <span>
          Please fill this out correctly.We will response in a three days
        </span>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="name"
            type="text"
            value={fullName}
            onChange={this.handleChange}
            required
            label="Name"
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            required
            label="Email"
          />
          <FormInput
            className="textarea"
            name="message"
            type="text"
            value={message}
            onChange={this.handleChange}
            required
            label="Message"
          />
        </form>
        <CustomButton type="submit" contact>
          Submit
        </CustomButton>
      </div>
    );
  }
}

export default ContactForm;
