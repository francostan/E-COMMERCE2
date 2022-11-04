import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import { fakeData } from "../utils/fakeData";

function Header() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(fakeData);
  }, []);
  return (
    <div>
      <Grid listVinos={products} />
    </div>
  );
}

export default Header;
