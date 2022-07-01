import React from "react";
import bg from "../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      className="text-center mt-12 py-12 "
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <h2 className="text-secondary font-bold text-2xl ">Contact Us</h2>
      <h3 className="text-4xl mb-12 text-white">Stay connected with us</h3>
      <input
        type="text"
        placeholder="email"
        className="input w-full max-w-md mb-2"
      />
      <br />
      <input
        type="text"
        placeholder="subject"
        className="input w-full max-w-md"
      />
      <br />
      <br />
      <textarea
        className="textarea w-full max-w-md"
        placeholder="Your message"
        rows={6}
      ></textarea>
      <br />
    </div>
  );
};

export default ContactUs;
