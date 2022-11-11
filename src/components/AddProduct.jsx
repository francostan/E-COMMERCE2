import React from "react";
import { useState } from "react";
import style from "../Styles/AddProduct.module.css";
import axios from "axios";
import { useNavigate } from "react-router";

export default function AddProduct() {
  const navigate = useNavigate();

  const initialState = {
    marca: "",
    bodega: "",
    nombre: "",
    tipo: "",
    precio: null,
    images: "",
    stock: null,
    descripcion: "",
  };

  const [input, setInput] = useState(initialState);

  const handlerInput = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "stock" || name === "precio") {
      value = Number(value);
    }

    setInput({ ...input, [name]: value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/products/add", input);
    const userRoad = window.confirm(
      "Producto Agregado, presiona aceptar para agregar mas productos. Caso contrario sera re dirigido"
    );
    setInput(initialState);

    if (!userRoad) navigate("/admin");
  };

  return (
    <>
      <div id={style["productForm"]}>
        <div className={style["fieldset"]}>
          <legend>Agregar Producto</legend>
          <form onSubmit={handlerSubmit} method="post">
            <div className={style["row"]}>
              <input
                type="text"
                placeholder="Marca"
                name="marca"
                onChange={handlerInput}
                value={input.marca}
                required
              />
            </div>
            <div className={style["row"]}>
              <input
                type="text"
                placeholder="Bodega"
                name="bodega"
                onChange={handlerInput}
                value={input.bodega}
                required
              />
            </div>
            <div className={style["row"]}>
              <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                onChange={handlerInput}
                value={input.nombre}
                required
              />
            </div>
            <div className={style["row"]}>
              <input
                type="text"
                placeholder="Tipo"
                name="tipo"
                onChange={handlerInput}
                value={input.tipo}
                required
              />
            </div>
            <div className={style["row"]}>
              <input
                type="number"
                placeholder="Precio"
                name="precio"
                onChange={handlerInput}
                value={input.precio}
                required
              />
            </div>
            <div className={style["row"]}>
              <input
                type="text"
                placeholder="Imagen"
                name="images"
                onChange={handlerInput}
                value={input.images}
                required
              />
            </div>
            <div className={style["row"]}>
              <input
                type="number"
                placeholder="Stock"
                name="stock"
                onChange={handlerInput}
                value={input.stock}
                required
              />
            </div>
            <div className={style["row"]}>
              <textarea
                className={style["textAreaProduct"]}
                placeholder="Descripcion"
                name="descripcion"
                onChange={handlerInput}
                value={input.descripcion}
                required
              />
            </div>

            <input type="submit" value="Agregar Producto" required />
          </form>
        </div>
      </div>
    </>
  );
}
