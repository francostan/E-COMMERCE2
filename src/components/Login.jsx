<<<<<<< HEAD
import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
=======
import useInput from "../hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router";

export const Login = () => {
  const email = useInput("");
  const password = useInput("");
  const navigate = useNavigate();
>>>>>>> 3fba350 (Model Shopping)

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    const data = { email, password };
    axios
      .post("/api/users/login", data)
      .then(() => console.log("loggin succesful"))
      .catch((error) => console.log(error));
=======
    axios
      .post("http://localhost:3001/api/users/login", {
        email: email.value,
        password: password.value,
      })
      .then((res) => res.data)
      .then((user) => {
        alert(
          `Bienvenido ${user.name}!, recargue la pagina para ver los cambios`
        );
        // navigate("/");
      })
      .catch((err) => console.log("estoy entrando en el catch"));
>>>>>>> 3fba350 (Model Shopping)
  };
  return (
    <div>
      <div>
        <h2>Log in</h2>
      </div>

<<<<<<< HEAD
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
=======
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input {...email} type="text" />

        <label for="password">Password</label>
        <input {...password} type="password" />

        <input type="checkbox" />
        <label for="password">Recuerdame</label>

        <button type="submit">Ingresar</button>
>>>>>>> 3fba350 (Model Shopping)
      </form>
    </div>
  );
};

export default Login;
