import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItems } from "../utils/checkOutRequests";
import "../Styles/OrderItems.css";
function OrderItem() {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getItems(id).then((respuesta) => {
      setItems(respuesta);
    });
  }, []);
  console.log(items);
  return (
    <div className="contenedor">
      <div className="compra">
        {items.map((item) => (
          <div className="tarjeta">
            <div className="datos">
              <h1>{item.product.nombre}</h1>
              <h2>Unidades: {item.cantidad}</h2>
              <h2>Precio por unidad: ${item.product.precio}</h2>
            </div>
            <div className="imagenContainer">
              <img src={item.product.images} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderItem;
