import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pp0vrdf", // ✅ Service ID
        "template_ka1h8rc", // ✅ Template ID
        form.current,
        "3EZUI7LogtC5_hdPS" // ✅ Public Key
      )
      .then(
        () => {
          alert("✅ Message Sent!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send. Please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="widget-form">
      <div className="row gx-4 gx-xxl-5 px-0">
        <div className="col-md-6 mb-10">
          <div className="form-input-box">
            <label className="fs-16 text-white">Name</label>
            <input
              type="text"
              name="from_name"
              required
              placeholder="Enter Name"
            />
          </div>
        </div>

        <div className="col-md-6 mb-10">
          <div className="form-input-box">
            <label className="fs-16 text-white">Email</label>
            <input
              type="email"
              name="from_email"
              required
              placeholder="Enter Email"
            />
          </div>
        </div>

        <div className="col-md-12 mb-20">
          <div className="form-input-box">
            <label className="fs-16 text-white">Message</label>
            <textarea
              name="message"
              required
              placeholder="Write Message"
            ></textarea>
          </div>
        </div>

        <div className="col-12">
          <button className="theme_btn" type="submit">
            Submit Now
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
