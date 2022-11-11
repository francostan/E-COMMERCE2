import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import styles from "../Styles/ModificarProduct.module.css";

export default function ModificarProduct() {
  const [input, setInput] = useState({});
  const [products, setProducts] = useState([]);
  const [toggle, setToggle] = useState(false);

  const initialState = {
    bodega: "",
    marca: "",
    stock: "",
  };

  useEffect(() => {
    axios
      .get("/api/products")
      .then((producto) => setProducts(producto.data))
      .catch((err) => {
        console.error(err);
      });
  }, [input]);

  const handlerBtnConfirm = async () => {
    const product = await axios.put("/api/products/productmod", { ...input });
    alert("Product Modificado");
    setInput(initialState);
  };

  const handlerInput = (e) => {
    e.preventDefault();
    let value = e.target.value;
    const name = e.target.name;

    if (name === "precio" || name === "stock") {
      value = Number(value);
    }

    setInput({ ...input, [name]: value });
  };

  const handlerBtnToggle = () => {
    setToggle(!toggle);
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

  return (
    <>
      <Select value={input} options={options} onChange={handleSelect} />

      <div className={styles["parentProductModificar"]}>
        <div className={styles["div1ProductModificar"]}>Bodega </div>
        <div className={styles["div2ProductModificar"]}>Nombre</div>
        <div className={styles["div3ProductModificar"]}>Precio</div>
        <div className={styles["div4ProductModificar"]}>Stock </div>
        <div className={styles["div5ProductModificar"]}>Imagen</div>
        <div className={styles["div6ProductModificar"]}>{input.bodega}</div>
        <div className={styles["div7ProductModificar"]}>{input.marca}</div>
        <div className={styles["div8ProductModificar"]}>{input.precio}</div>
        <div className={styles["div9ProductModificar"]}>{input.stock}</div>
        <div className={styles["div10ProductModificar"]}>
          <img src={input.images} alt={input.marca} />
        </div>
        <div className={styles["div11ProductModificar"]}>
          {input.descripcion}
          <br />
          <button onClick={handlerBtnToggle}>Modificar</button>
        </div>
        {!toggle ? null : (
          <>
            <div className={styles["div12ProductModificar"]}>
              {" "}
              <input
                type="text"
                name="bodega"
                placeholder={input.bodega}
                onChange={handlerInput}
                value={input.bodega}
              />{" "}
            </div>
            <div className={styles["div13ProductModificar"]}>
              {" "}
              <input
                type="text"
                name="marca"
                placeholder={input.marca}
                onChange={handlerInput}
                value={input.marca}
              />{" "}
            </div>
            <div className={styles["div14ProductModificar"]}>
              {" "}
              <input
                type="number"
                name="precio"
                placeholder={input.precio}
                onChange={handlerInput}
                value={input.precio}
              />
            </div>
            <div className={styles["div15ProductModificar"]}>
              {" "}
              <input
                type="number"
                name="stock"
                placeholder={input.stock}
                onChange={handlerInput}
                value={input.stock}
              />
            </div>
            <div className={styles["div16ProductModificar"]}>
              {" "}
              <input
                type="text"
                name="images"
                placeholder={input.images}
                onChange={handlerInput}
                value={input.images}
              />{" "}
            </div>
            <div className={styles["div17ProductModificar"]}>
              {" "}
              <textarea
                type="text"
                name="descripcion"
                placeholder={input.descripcion}
                onChange={handlerInput}
                value={input.descripcion}
              />
            </div>
            <div className={styles["div18ProductModificar"]}>
              <button onClick={handlerBtnConfirm}>Confirmar</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
