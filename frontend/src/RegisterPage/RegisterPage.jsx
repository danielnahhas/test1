import React, { useState } from "react";
import axios from "axios";
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
    <div>
      <h1>Register</h1>

      <p>
        <label>Username: </label>
        <input onChange={handleUser} type="text" placeholder="Username" />
      </p>
      <p>
        <label>password: </label>
        <input
          onChange={handlePassword}
          type="password"
          placeholder="Password"
        />
      </p>
      <p>
        <button onClick={submit}>Submit</button>
      </p>
    </div>
  );
}

export default Register;
