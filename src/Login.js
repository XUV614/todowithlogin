import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { datbase } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(datbase, email, password);
      history("/home");
    } catch (err) {
      alert(err.code);
    }
  };

  const handleReset = () => {
    history("/reset");
  };

  return (
    <div className="App">
      <h1 className="head1">SignIn</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="email"
        />
        <br />
        <input
          className="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <p className="forgot" onClick={handleReset}>
          Forgot Password?
        </p>
        <br />
        <button className="submit" type="submit">
          SignIn
        </button>
      </form>
    </div>
  );
}

export default Login;

