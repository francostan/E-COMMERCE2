import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const data = { email, password };
    axios.post("/login", data);
    navigate("/").catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        <h2>Log in</h2>
      </div>
      <form>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <div>
            <input type="checkbox" />
            <label htmlFor="password">Remember Me</label>
          </div>
          <button type="submit" onClick={handleClick}>
            Ingresa
          </button>
          <div>Olvidaste tu contraseña?</div>
        </div>
      </form>
    </div>
  );
};

export default Login;
