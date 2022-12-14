import React from "react";
import useInput from "../hooks/useInput";
import axios from "axios";
import Grid from "../commons/Grid";


const Category = () => {
  const marca = useInput("");
  const precio = useInput(0);
  const eleccion = useInput("");
  const [vinos, setVinos] = React.useState([]);

    const handleSubmit = (e) => {
    e.preventDefault();
    if(eleccion.value === "marca"){
    axios.get(`/api/category/bodega/${marca.value}`)
    .then((vinos) => setVinos(vinos.data))
    .catch((err) => console.log(err));
    }
    else if(eleccion.value === "precio"){
    axios.get(`/api/category/precio/${precio.value}`)
    .then((vinos) => setVinos(vinos.data))
    .catch((err) => console.log(err));
    }
    }


  return (
    <div>
      <h1>¡Seleccione el filtro para buscar!</h1>
      <input
        placeholder="Indique marca/precio"
        {...eleccion}
        required
        autofocus
      />

      <form onSubmit={handleSubmit}>
    
        {eleccion.value === "marca" ? (
          <input placeholder="Indique marca" {...marca} required autofocus />
        ) : null} 
        
        {eleccion.value === "precio" ? (
          <input placeholder="Indique precio" {...precio} required autofocus />)
        : null}
      
      </form>
    <div>
      {vinos? <Grid listVinos={vinos} /> : null}
      </div>
    </div>
  );
};

export default Category;
