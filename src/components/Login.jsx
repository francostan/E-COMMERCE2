import React from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Hola");
  };

  return (
    <div>
      <div>
        <h2>Log in</h2>
      </div>

      <form>
        <div>
          <label for="email">Email</label>
          <input type="text" onChange={handleEmail} />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" onChange={handlePassword} />
        </div>
        <div>
          <div>
            <input type="checkbox" />
            <label for="password">Recuerdame</label>
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
