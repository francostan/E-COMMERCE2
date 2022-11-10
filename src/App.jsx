import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Favoritos from "./components/Favoritos";
import { Navigate } from "react-router-dom";
import "./Styles/Global.css";
import "./Styles/reset.css";
import ProductDetails from "../src/components/ProductDetails";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/user";
import Cart from "./components/Cart";
import MercadoPago from "./components/MercadoPago";
import Category from "./components/Category";


//Consultar a fran el dispatch del user, para el ternario de las rutas cuando exista user

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/users/me")
      .then((res) => res.data)
      .then((user) => {
        dispatch(setUser(user));
      })
      .catch(() =>
        console.error("Necesitas loguearte para obtener tu usuario.")
      );
  }, []);
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<Category />} />
        {!user.id ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        ) : (
          <>
            <Route path={`/favoritos/${user.id}`} element={<Favoritos />} />
            <Route path="/pay" element={<MercadoPago />} />
          </>
        )}
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/carts/:id" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
