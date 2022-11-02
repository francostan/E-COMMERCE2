import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Register from "./components/Register";

const App = () => {
  return (
    <div>
      <p>¡Bienvenidos a E-COMMERCE!</p>
      <Routes>
        <Route path="/" element={<p />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
