import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>Registrate a DIVINO</h2>
            <div>
              <form>
                <div>
                  <input type="text" id="nombre" placeholder="Nombre" />
                </div>
                <div>
                  <input type="text" id="apellido" placeholder="Apellido" />
                </div>
                <div>
                  <input type="email" id="email" placeholder="Email" />
                </div>
                <div>
                  <input type="password" id="password" placeholder="Password" />
                </div>
                <div>
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="confirm-password"
                  />
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
