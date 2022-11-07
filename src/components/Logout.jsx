import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user";
const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/logout")
      .then((reStatus) => {
        dispatch(
          setUser({ id: null, name: null, lastname: null, email: null })
        );
        alert("Sesion cerrada con exito");

        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h4>¿Seguro deseas desloguarte?</h4>

      <button onClick={handleSubmit}>Logout</button>
    </div>
  );
};

export default Logout;
