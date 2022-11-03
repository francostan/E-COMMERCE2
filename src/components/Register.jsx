import React from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {

const name = useInput("");
const lastname= useInput("");
const email = useInput("");
const password = useInput("");
const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/users/register", {name: name.value, lastname: lastname.value, email: email.value, password: password.value})  
        .then((res) => res.data)
        .then((user)=> {
            alert(`Usuario creado con exito, ve a login para ingresar, ${user.name}!`);
            navigate("/login")})
        .catch((err) => console.error(err));
    };

  return (
    <div>
      <div>
        <div>
          <div>
            <h2>Registrate a DIVINO</h2>
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <input {...name}type="text" placeholder="Nombre" />
                </div>
                <div>
                  <input {...lastname}type="text" placeholder="Apellido" />
                </div>
                <div>
                  <input {...email}type="email"  placeholder="Email" />
                </div>
                <div>
                  <input {...password}type="password" id="password" placeholder="Password" />
                </div>
                
                
                <button>Crear cuenta</button>
                <div>Ya tenés cuenta?</div>
                <button>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
