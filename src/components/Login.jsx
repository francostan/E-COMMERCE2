import React from "react";
import useInput from "../hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router";
import styles from "../Styles/Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/user";

export const Login = () => {
  const dispatch = useDispatch();
  const email = useInput("");
  const password = useInput("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/login", {
        email: email.value,
        password: password.value,
      })
      .then((res) => res.data)
      .then((user) => {
        dispatch(setUser(user));
        alert(
          `Bienvenido ${user.name}!, recargue la pagina para ver los cambios`
        );
        navigate("/");
      })
      .catch((err) => {
        alert("Usuario o contraseña incorrecta");
        console.error(err);
      });
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
          <h1>Sign In</h1>
          <div>Por favor ingresa para comprar en esta plataforma.</div>
        </div>
        <div className={styles["login-card-form-container"]}>
          <form onSubmit={handleSubmit} className={styles["login-card-form"]}>
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
                placeholder="Enter Email"
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
                placeholder="Enter Password"
                {...password}
                required
                autofocus
              />
            </div>

            <button type="submit">SIGN IN</button>

            <div className={styles["form-other-item"]}>
              <div className={styles["checkbox"]}>
                <input type="checkbox" id="rememberMeCheckBox" />
                <label htmlFor="rememberMeCheckBox">Remember Me</label>
              </div>
              {/* 
              ACA TIENE QUE IR UN LINK AL RECUPERO DE PASS */}
              <p>I Forgot my Password</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
