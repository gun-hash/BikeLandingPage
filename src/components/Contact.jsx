import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("Submitted. We will get back to you soon.");
    setEmail("");
  };

  return (
    <div id="contact" className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <form className="contact-form-container" onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            placeholder="Yourmail@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit" className="secondary-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
