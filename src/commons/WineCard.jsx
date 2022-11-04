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
              backgroundImage: `url(${vino.images[0].url})`,
            }}
          ></div>

          <div className={styles.title}>{vino.nombre}</div>
          <div className={styles.text}>{vino.descripcion}</div>

          <div className={styles.catagory}>
            {vino.tipo}
            <i className="fas fa-film"></i>
          </div>

          <div className={styles.views}>
            {vino.bodega}
            <i className="far fa-eye"></i>{" "}
          </div>
        </div>
      </li>
      {/* </Link> */}
    </>
  );
}
