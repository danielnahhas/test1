import React, { useState } from "react";
import "./ContactPage.css";
function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({});
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      setErrorMessage("Field Missing");
    } else {
      setErrorMessage("");
      setForm({ name: name, email: email, message: message });
    }
  };
  return (
    <div>
      <h1>Contact Us</h1>
      <form id="contactForm">
        <label htmlFor="name">name</label>
        <input onChange={handleName} id="name" type="text" />
        <br />
        <label htmlFor="email">email</label>
        <input onChange={handleEmail} id="email" type="text" />
        <br />
        <label htmlFor="message">message</label>
        <textarea onChange={handleMessage} name="" id="message" rows="4" />
        <br />
        <button onClick={submit}>Submit</button>
        <p>{errorMessage}</p>
      </form>
      {form ? (
        <div>
          <p>{form.name}</p>
          <p>{form.email}</p>
          <p>{form.message}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ContactPage;
