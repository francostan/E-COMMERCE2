import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleProduct from "./SingleProduct";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`/api/products/${id}`).then((vino) => setProduct(vino.data));
  }, []);

  return <SingleProduct product={product} />;
};

export default ProductDetails;
