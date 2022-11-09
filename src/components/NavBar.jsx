import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../store/user";
import { setProducts } from "../store/products";
import "../Styles/NavBar.css";
import { fakeData } from "../utils/fakeData";

const Navbar = () => {
  const navigate = useNavigate();
  //le avisamos al store que hay un nuevo usuario logueado
  const dispatch = useDispatch();

  // //ahora traemos el usuario logueado con el hook useSelector
  const user = useSelector((state) => state.user);
  //lo que hace la funcion es traer el estado del store y lo guarda en user

  // useEffect(() => {}, [user]);

  // useEffect(() => {
  //   axios
  //     .get("/api/users/me")
  //     .then((res) => res.data)
  //     .then((user) => {
  //       console.log(user);
  //       dispatch(setUser(user));
  //     })
  //     .catch(() =>
  //       console.error("Necesitas loguearte para obtener tu usuario.")
  //     );
  // }, []);

  // useEffect(() => {
  //   dispatch(setProducts(fakeData));
  // }, []);

  const handlerLogOut = (e) => {
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
    <div className="navbar">
      <nav className="nav-container">
        <div className="logo-and-ul">
          <div className="logo-container">
            <Link to="/home" className="logo">
              <h1 className="logo">DIVINO</h1>
            </Link>
          </div>
          <div className="ulContainer">
            <ul className="ul-li">
              <li>CATEGORIAS</li>
              <li>PRODUCTOS</li>
            </ul>
          </div>
        </div>

        <div className="name-and-button">
          {user.name ? (
            <>
              <p>{user.name}</p>

              <button onClick={handlerLogOut}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/register">
                <button>REGISTER</button>
              </Link>
              <Link to="/login">
                <button>LOGIN</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
