import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useFavoritesContext } from "../context/FavoritesContext";

export default function BtnFavs({ vino }) {
  const { setFavoritesUser } = useFavoritesContext();
  const [boton, setBoton] = useState(false);

  const user = useSelector((state) => state.user);
  const userId = user.id;
  const productId = vino.id;

  useEffect(() => {
    axios
      .post("/api/favoritos/verify", { userId, productId })
      .then((bool) => setBoton(bool.data));
  }, []);

  const handleClickFav = (e) => {
    if (!boton) {
      axios.post("/api/favoritos/add", { userId, productId }).then((data) => {
        setBoton(true);

        return;
      });
    }
    axios.put("/api/favoritos/delete ", { userId, productId }).then((data) => {
      setBoton(false);

      setFavoritesUser(data);
    });
  };

  return (
    <>
      {!user.id ? (
        <div></div>
      ) : boton ? (
        <span
          class="favIcons material-symbols-rounded"
          onClick={handleClickFav}
        >
          favorite
        </span>
      ) : (
        <span className="material-symbols-rounded" onClick={handleClickFav}>
          favorite
        </span>
      )}
    </>
  );
}
