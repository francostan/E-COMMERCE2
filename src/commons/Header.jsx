import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import { useDispatch, useSelector } from "react-redux";


function Header() {

  //traemos los productos favoritos del store product
  const products = useSelector((state) => state.products);

  return (
    <div>
      <Grid listVinos={products} />
    </div>
  );
}

export default Header;
