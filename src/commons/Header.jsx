import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Header() {
  const [products, setProducts] = useState([]);

  // //traemos los productos favoritos del store product
  // const products = useSelector((state) => state.products);

  useEffect(() => {
    axios.get("/api/products").then((arrVinos) => setProducts(arrVinos.data));
  }, []);

  return (
    <div>
      <Grid listVinos={products} />
    </div>
  );
}

export default Header;
