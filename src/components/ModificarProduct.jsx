import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";

export default function ModificarProduct() {
  const [input, setInput] = useState({});
  const [products, setProducts] = useState([]);

  const initialState = () => {};

  useEffect(() => {
    axios
      .get("/api/products")
      .then((producto) => setProducts(producto.data))
      .catch((err) => {
        console.error(err);
      });
  }, [input]);

  const handlerInput = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    setInput({ ...input, [name]: value, isAdmin: e.target.checked });
  };

  const handleSelect = (e) => {
    setInput({ ...input, ...e.value });
  };

  const options = products.map((elemento) => {
    return {
      label: `Bodega:${elemento.bodega}    Nombre:${elemento.marca}    Stock disponible:${elemento.stock}  `,
      value: elemento,
    };
  });

  console.log(input);
  return (
    <>
      <Select value={input} options={options} onChange={handleSelect} />

      <div class="parent">
        <div class="div1"> </div>
        <div class="div2"> </div>
        <div class="div3"> </div>
        <div class="div4"> </div>
        <div class="div5"> </div>
        <div class="div6"> </div>
        <div class="div7"> </div>
        <div class="div8"> </div>
        <div class="div9"> </div>
        <div class="div10"> </div>
        <div class="div11"> </div>
      </div>
    </>
  );
}
