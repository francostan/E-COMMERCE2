import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Favoritos from "./components/Favoritos";
import { Navigate } from "react-router-dom";
import "./Styles/Global.css";
import "./Styles/reset.css";
import SingleProduct from "./components/SingleProduct";
import MercadoPago from "./components/MercadoPago";

//Consultar a fran el dispatch del user, para el ternario de las rutas cuando exista user

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/pay" element={<MercadoPago />} />
      </Routes>
    </div>
  );
}

export default App;
