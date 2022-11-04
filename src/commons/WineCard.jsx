import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/WineCard.module.css";

//Link esta comentado lo importante ahi es poner el enlace a la vista del componente individual
//Este componente recibe un vino y trabaja la data a renderizar

export default function WineCard({ vino }) {
  return (
    <>
      {/* <Link
        to={`url de vinos individuales}`}
      > */}
      <li>
        <div className={styles.card}>
          <div
            className={styles.img1}
            style={{
              backgroundImage: `url(rutaIndividualDelVino pasada por parametro)`,
            }}
          ></div>

          <div className={styles.title}>{"Nombre del vino"}</div>
          <div className={styles.text}>{"Descripcion del vino"}</div>

          <div className={styles.catagory}>
            {"Categoria del vino"}
            <i className="fas fa-film"></i>
          </div>

          <div className={styles.views}>
            {"bodega"}
            <i className="far fa-eye"></i>{" "}
          </div>
        </div>
      </li>
      {/* </Link> */}
    </>
  );
}
