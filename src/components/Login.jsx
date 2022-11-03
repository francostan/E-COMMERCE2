import React from 'react'
import useInput from '../hooks/useInput'
import axios from 'axios'
import { useNavigate } from 'react-router'

export const Login = () => {
const email = useInput("");
const password = useInput("");
const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/users/login", {email: email.value, password: password.value})  
        .then((res) => res.data)
        .then((user)=> {
            alert(`Bienvenido ${user.name}!, recargue la pagina para ver los cambios`);
            navigate("/");
            })
        .catch((err) => console.error(err));
        
    };
  return (
    <div>
      <div>
        <h2>Log in</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label for="email">Email</label>
          <input {...email} type="text"  />
        </div>
        <div>
          <label for="password">Password</label>
          <input {...password }type="password"  />
        </div>
        <div>
          <div>
            <input type="checkbox" />
            <label for="password">Recuerdame</label>
          </div>
          <button type="submit" >
            Ingresar
          </button>
          <div>Olvidaste tu contraseña?</div>
        </div>
      </form>
    </div>
  );
};

export default Login;
