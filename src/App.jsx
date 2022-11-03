import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <p>¡Bienvenidos a E-COMMERCE!</p>
      <Routes>
        <Route path="/" element={<p />} />
        <Route path="/" element={<h1 />} />
        <Route path="/" element={<h2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
