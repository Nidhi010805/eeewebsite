import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        <strong>Address:</strong> 123 College Road, City, State, PIN
      </p>
      <p>
        <strong>Email:</strong> info@college.edu
      </p>
      <p>
        <strong>Phone:</strong> +91-9876543210
      </p>
      <h2>Contact Form</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;