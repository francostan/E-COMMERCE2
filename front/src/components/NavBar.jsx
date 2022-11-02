import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { setUser } from "../store/user";

const Navbar = () => {
  //le avisamos al store que hay un nuevo usuario logueado
  const dispatch = useDispatch();

  //ahora traemos el usuario logueado con el hook useSelector
  const user = useSelector((state) => state.user);
  //lo que hace la funcion es traer el estado del store y lo guarda en user

  useEffect(() => {
    axios
      .get("/api/users/me")
      .then((res) => res.data)
      .then((user) => {
        console.log(user);
        dispatch(setUser(user));
      })
      .catch(() =>
        console.error("Necesitas loguearte para obtener tu usuario.")
      );
  }, []);

  return (
    <nav>
      <h3>E-Commerce</h3>

      {user.name ? (
        <div>
          <p>{user.name}</p>
          <Link to="/logout">
            <Button>Logout</Button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/register">
            <Button>Register</Button>
          </Link>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      )}
      
    </nav>
  );
};

export default Navbar;
