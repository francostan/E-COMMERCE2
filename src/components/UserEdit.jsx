import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";

import styles from "../Styles/UserEdit.module.css";

export default function UserEdit() {
  const initialState = {
    name: null,
    lastname: null,
    email: null,
    esAdmin: null,
  };

  const [data, setData] = useState([]);
  const [input, setInput] = useState(initialState);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("/api/users")
      .then((user) => setData(user.data))
      .catch((err) => {
        console.error(err);
      });
  }, [input]);

  const handlerBtnModificar = () => {
    setToggle(!toggle);
  };

  const handlerBtnConfirm = async () => {
    const usuario = await axios.put("/api/users/usermod", { ...input });
    alert("Usuario Modificado");
    setInput(usuario.data[1]);
  };

  const handlerBtnDelete = async () => {
    const bool = window.confirm("ATENCION! Confirma borrar el usuario?");
    if (bool) {
      const usuario = await axios.delete(`/api/users/delete/${input.id}`);
      setInput(initialState);
      alert("Usuario Borrado");
    }
  };

  const handlerInput = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    setInput({ ...input, [name]: value, isAdmin: e.target.checked });
  };

  const handleSelect = (e) => {
    if (e.value.isAdmin) {
      e.value.esAdmin = "Si";
    } else {
      e.value.esAdmin = "No";
    }
    setInput({ ...input, ...e.value });
  };

  const options = data.map((elemento) => {
    return {
      label: `Usuario ${elemento.name} Apellido:${elemento.lastname} Es Admin:${elemento.isAdmin}`,
      value: elemento,
    };
  });

  return (
    <>
      <Select value={input} options={options} onChange={handleSelect} />
      <div className={styles["adminUserContainer"]}>
        <div className={styles["parent"]}>
          <div className={styles["div1"]}>Nombre</div>
          <div className={styles["div2"]}>Apellido</div>
          <div className={styles["div3"]}>Email</div>
          <div className={styles["div4"]}>Admin</div>
          <div className={styles["div5"]}>{input.name}</div>
          <div className={styles["div6"]}>{input.lastname}</div>
          <div className={styles["div7"]}>{input.email}</div>
          <div className={styles["div8"]}>{input.esAdmin}</div>

          {!toggle ? null : (
            <>
              <div className={styles["div9"]}>
                <input
                  type="text"
                  name="name"
                  placeholder={input.name}
                  value={input.name}
                  onChange={handlerInput}
                />
              </div>
              <div className={styles["div10"]}>
                {" "}
                <input
                  type="text"
                  name="lastname"
                  onChange={handlerInput}
                  value={input.lastname}
                  placeholder={input.lastname}
                />
              </div>
              <div className={styles["div11"]}>
                {" "}
                <input
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={handlerInput}
                  placeholder={input.email}
                />
              </div>
              <div className={styles["div12"]}>
                {" "}
                <input
                  type="checkbox"
                  name="isAdmin"
                  onChange={handlerInput}
                  checked={input.isAdmin}
                />{" "}
              </div>{" "}
              <button onClick={handlerBtnConfirm}>Confirmar</button>
              <button onClick={handlerBtnDelete}>Borrar Usuario </button>
            </>
          )}

          <div className={styles["div13"]}>
            {" "}
            <button onClick={handlerBtnModificar}>Modificar</button>
          </div>
        </div>
      </div>
    </>
  );
}
