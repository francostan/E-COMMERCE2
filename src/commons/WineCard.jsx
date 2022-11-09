import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/WineCard.module.css";

import BtnFavs from "./BtnFavs";

export default function WineCard({ vino }) {
  return (
    <>
      <div>
        <Link to={`/products/${vino.id}`}>
          <li>
            <div className={styles.card}>
              <div
                className={styles.img1}
                style={{
                  backgroundImage: `url(${vino.images})`,
                }}
              ></div>

              <div className={styles.text}>{vino.descripcion}</div>

              <div className={styles.catagory}>
                {vino.nombre}
                <i className="fas fa-film"></i>
              </div>

              <div className={styles.views}>
                {vino.bodega}
                <i className="far fa-eye"></i>{" "}
              </div>
            </div>
          </li>
        </Link>
        <div className="botonesUsuario">
          <BtnFavs vino={vino} />
        </div>
      </div>
    </>
  );
}
