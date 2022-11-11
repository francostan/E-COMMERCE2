import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";

import "../Styles/UserEdit.css";

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
      <div className="adminUserContainer">
        <div class="parent">
          <div class="div1">Nombre</div>
          <div class="div2">Apellido</div>
          <div class="div3">Email</div>
          <div class="div4">Admin</div>
          <div class="div5">{input.name}</div>
          <div class="div6">{input.lastname}</div>
          <div class="div7">{input.email}</div>
          <div class="div8">{input.esAdmin}</div>

          {!toggle ? null : (
            <>
              <div class="div9">
                <input
                  type="text"
                  name="name"
                  placeholder={input.name}
                  value={input.name}
                  onChange={handlerInput}
                />
              </div>
              <div class="div10">
                {" "}
                <input
                  type="text"
                  name="lastname"
                  onChange={handlerInput}
                  value={input.lastname}
                  placeholder={input.lastname}
                />
              </div>
              <div class="div11">
                {" "}
                <input
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={handlerInput}
                  placeholder={input.email}
                />
              </div>
              <div class="div12">
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

          <div class="div13">
            {" "}
            <button onClick={handlerBtnModificar}>Modificar</button>
          </div>
        </div>
      </div>
    </>
  );
}
