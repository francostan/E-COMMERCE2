import useInput from "../hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router";

export const Login = () => {
  const email = useInput("");
  const password = useInput("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };
  return (
    <div>
      <div>
        <h2>Log in</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input {...email} type="text" />

        <label for="password">Password</label>
        <input {...password} type="password" />

        <input type="checkbox" />
        <label for="password">Recuerdame</label>

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
