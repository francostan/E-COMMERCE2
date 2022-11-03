import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/logout")
      .then((reStatus) => {
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