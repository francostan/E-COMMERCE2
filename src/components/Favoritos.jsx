import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Grid from "../commons/Grid";
import { useState, useEffect } from "react";
import { useFavoritesContext } from "../context/FavoritesContext";

const Favoritos = () => {
  const { favoritesUser } = useFavoritesContext();
  const user = useSelector((state) => state.user);
  const id = user.id;
  const [vinosFavs, setVinosFavs] = useState([]);

  useEffect(() => {
    axios.get(`/api/favoritos/${id}`).then((vinos) => {
      const arrVinos = vinos.data.map((vino) => {
        return vino.product;
      });

      setVinosFavs(arrVinos);
    });
  }, [favoritesUser]);

  return (
    <div>
      <h1>Mis favoritos</h1>

      <Grid listVinos={vinosFavs} />
    </div>
  );
};

export default Favoritos;
