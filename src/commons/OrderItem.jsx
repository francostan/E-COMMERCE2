import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItems } from "../utils/checkOutRequests";

function OrderItem() {
  const [items, setItems] = useState([]);
  const { id } = useParams;
  useEffect(() => {
    getItems(tickets.id).then((respuesta) => {
      setItems(respuesta);
    });
  }, []);
  console.log(items);
  return <div>OrderItem</div>;
}

export default OrderItem;
