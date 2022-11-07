import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Favoritos from "./components/Favoritos";
import { Navigate } from "react-router-dom";
import "./Styles/Global.css";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </div>
  );
}

export default App;
