import React, { useState } from "react";
import axios from "axios";
import "./RegisterPage.css";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUser = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/register", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error.response.error);
      });
  };
  return (
    <div className="login_container">
      <div className="card">
        <h4 className="title">Register</h4>

        <p>
          <label className="reglab">Username </label>
          <input
            className="input-field"
            onChange={handleUser}
            type="text"
            placeholder="Username"
          />
        </p>
        <p>
          <label className="reglab">password </label>
          <input
            className="input-field"
            onChange={handlePassword}
            type="password"
            placeholder="Password"
          />
        </p>
        <p>
          <button className="btn" onClick={submit}>
            Submit
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
