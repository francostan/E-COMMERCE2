import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ShowOrderDetails from "../commons/ShowOrderDetails";
import "../Styles/CheckOut.css";
import { getItems, getTickets } from "../utils/checkOutRequests";
function CheckOut() {
  const user = useSelector((state) => state.user);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets(user.id).then((respuesta) => {
      setTickets(respuesta);
    });
  }, []);

  //  console.log(tickets[0].id);
  return (
    <div className="containerCheckOut">
      <h1>Mis compras:</h1>

      {tickets.map((ticket) => {
        return <ShowOrderDetails tickets={ticket} />;
      })}
    </div>
  );
}

export default CheckOut;
