import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVal, setPasswordVal] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const data = { name, lastName, email, password };
    console.log(data);
    axios
      .post("/api/users/register", data)
      .then(() => console.log("user Created"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <h2>Registrate a DIVINO</h2>
            <div>
              <form>
                <div>
                  <input
                    type="text"
                    id="nombre"
                    placeholder="Nombre"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="apellido"
                    placeholder="Apellido"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="confirm-password"
                    onChange={(e) => setPasswordVal(e.target.value)}
                  />
                </div>
                <button onClick={handleClick}>Crear cuenta</button>
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
