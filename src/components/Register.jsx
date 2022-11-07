import React from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router";
import styles from "../Styles/Register.module.css";

const Register = () => {
  const name = useInput("");
  const lastname = useInput("");
  const email = useInput("");
  const password = useInput("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/register", {
        name: name.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
      })
      .then((res) => res.data)
      .then((user) => {
        alert(
          `Usuario creado con exito, ve a login para ingresar, ${user.name}!`
        );
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className={styles["login-card-container"]}>
      <div className={styles["login-card"]}>
        <div className={styles["login-card-logo"]}>
          <img
            src="https://cdn.discordapp.com/attachments/1035659739486486622/1037009519676510238/LOGO_1.png"
            alt="logo"
          />
        </div>
        <div className={styles["login-card-header"]}>
          <h1>Registrate a divino</h1>
          <div>Se parte de la mejor vinoteca de Argentina.</div>
        </div>
        <div className={styles["login-card-form-container"]}>
          <form onSubmit={handleSubmit} className={styles["login-card-form"]}>
            <div className={styles["form-item"]}>
              <div>
                <span
                  className={`${styles["form-item-icon"]} material-symbols-rounded`}
                >
                  person
                </span>
              </div>

              <input
                type="text"
                placeholder="Nombre"
                {...name}
                required
                autofocus
              />
            </div>
            <div className={styles["form-item"]}>
              <div>
                <span
                  className={`${styles["form-item-icon"]} material-symbols-rounded`}
                >
                  wine_bar
                </span>
              </div>

              <input
                type="text"
                placeholder="Apellido"
                {...lastname}
                required
                autofocus
              />
            </div>
            <div className={styles["form-item"]}>
              <div>
                <span
                  className={`${styles["form-item-icon"]} material-symbols-rounded`}
                >
                  mail
                </span>
              </div>

              <input
                type="email"
                placeholder="Email"
                {...email}
                required
                autofocus
              />
            </div>
            <div className={styles["form-item"]}>
              <span
                className={`${styles["form-item-icon"]} material-symbols-rounded`}
              >
                lock
              </span>
              <input
                type="password"
                placeholder="Password"
                {...password}
                required
                autofocus
              />
            </div>

            <button type="submit">Crear Cuenta</button>

            <div className={styles["form-other-item"]}>
              Ya tenes Cuenta ?
              <Link to="/login">
                <button>SING IN</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <div>
  //       <div>
  //         <div>
  //           <h2>Registrate a DIVINO</h2>
  //           <div>
  //             <form onSubmit={handleSubmit}>
  //               <div>
  //                 <input {...name} type="text" placeholder="Nombre" />
  //               </div>
  //               <div>
  //                 <input {...lastname} type="text" placeholder="Apellido" />
  //               </div>
  //               <div>
  //                 <input {...email} type="email" placeholder="Email" />
  //               </div>
  //               <div>
  //                 <input
  //                   {...password}
  //                   type="password"
  //                   id="password"
  //                   placeholder="Password"
  //                 />
  //               </div>

  //               <button>Crear cuenta</button>
  //               <div>Ya tenés cuenta?</div>
  //               <button>Login</button>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Register;
