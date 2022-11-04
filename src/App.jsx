import { Route, Routes } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div>
      <p>¡Bienvenidos a E-COMMERCE!</p>
      <Navbar />
      <Routes>
        <Route path="/" element={<p />} />
        <Route path="/" element={<h1 />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
