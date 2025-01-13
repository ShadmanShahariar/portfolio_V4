import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactFormStyles.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "shadman_email",
        "template_y8wubm3",
        form.current,
        "iweX7clT31azsVai9"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input name="from_name" placeholder="Name" required />
        <input name="reply_to" type="email" placeholder="Email" required />
        <input name="subject" placeholder="Subject" required />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
