import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const data = { email, password };
    axios
      .post("/api/users/login", data)
      .then(() => console.log("loggin succesful"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        <h2>Log in</h2>
      </div>

      <form>
        <div>
          <label htmlfor="email">Email: </label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlfor="password">Password: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <div>
            <input type="checkbox" />
            <label htmlfor="password">Recuerdame</label>
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
