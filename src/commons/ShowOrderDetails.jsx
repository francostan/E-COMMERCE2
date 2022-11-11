import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getItems } from "../utils/checkOutRequests";

function ShowOrderDetails({ tickets }) {
  return (
    <>
      <div className="card">
        <h2>Compra del: {tickets.createdAt.slice(0, 10)}</h2>

        <h2> Precio total: ${tickets.total}</h2>
        <Link to={`/misCompras/${tickets.id}`}>
          <p role={"button"}>DETALLES</p>
        </Link>
      </div>
    </>
  );
}

export default ShowOrderDetails;
