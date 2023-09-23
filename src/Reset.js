import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { datbase } from "./FirebaseConfig";
import './Reset.css'

function Reset() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(datbase, email); 
      alert("Check your email for password reset instructions.");
    } catch (err) {
      alert(err.code);
    }
  };

  return (
    <div className="App">
      <h1 className="reset">Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="resetInput"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br/><br/>
        <button className="submit" type="submit">Reset</button>
      </form>
    </div>
  );
}

export default Reset;
