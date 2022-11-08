import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Grid from "../commons/Grid";
import { useState, useEffect } from "react";
import {setFavorites} from "../store/favorites";

const Favoritos = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  console.log(user);
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get(`/api/products/${user.id}`)
      .then((res) => res.data)
      .then((products) => {
        products.map((product) => {
          dispatch(setFavorites(product));
        });
      })
      .catch((err) => console.error(err));
  }

 
 
  const favorites = useSelector((state) => state.favorites);

  console.log(favorites);


  return (

    <div>

      <h1>Mis favoritos</h1>
      <button onClick={handleClick}>Ver favoritos</button>
      <div className="">
        <Grid listVinos={favorites} />
      </div>
    </div>
  );
};

export default Favoritos;
