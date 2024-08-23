import React, { useState } from "react";
import "./Contact.scss";
import Swal from "sweetalert2";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "37ee12bc-0912-4ff7-a210-0a6472b2071b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      Swal.fire({
        title: "Error!",
        text: "There was an error sending the email at this time. Please try again later!",
        icon: "error",
      });
    }
  };

  return (
    <div className="contact" id="contact">
      <h1 className="title">Contact Me</h1>
      <h2 className="sub-title">Reach out to me!</h2>
      <form onSubmit={onSubmit}>
        <div className="input-box">
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            name="name"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="">Your Message</label>
          <textarea
            className="field mess"
            placeholder="Enter your message"
            name="message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
