import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import styles from "../Styles/DropDown.module.css";

export default function DropDown() {
  const initialState = {
    bodega: "",
    marca: "",
    stock: "",
  };

  const [data, setData] = useState([]);
  const [input, setInput] = useState({});
  const [auxData, setAuxData] = useState(initialState);

  useEffect(() => {
    axios.get("/api/products").then((productos) => setData(productos.data));
  }, [input]);

  const handleSelect = (e) => {
    setInput(e);
    setAuxData(e.value);
  };

  const handleDelete = () => {
    const bool = window.confirm("Esta seguro que desea borrar ?");
    if (bool) {
      axios
        .delete(`/api/products/${input.value.id}`)
        .then((res) => {
          setInput({ label: "", value: "" });
          setAuxData(initialState);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const options = data.map((elemento) => ({
    label: `Bodega:${elemento.bodega}    Nombre:${elemento.marca}    Stock disponible:${elemento.stock} `,
    value: elemento,
  }));

  return (
    <>
      <div>{`Admin Panel`}</div>
      <Select value={input} options={options} onChange={handleSelect} />

      <div>
        <div className={styles["deleteContainer"]}>
          <div>
            <h2>Panel para borrar</h2>
          </div>
          <div>Bodega: {`${auxData.bodega}`}</div>
          <div>nombre: {`${auxData.marca}`}</div>
          <div>Stock: {`${auxData.stock}`}</div>
          <div>
            <button onClick={handleDelete}>
              <span
                className={`${styles["adminIcons"]} material-symbols-rounded`}
              >
                delete
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
