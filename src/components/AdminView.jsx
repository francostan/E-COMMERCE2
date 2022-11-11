import React from "react";
import styles from "../Styles/AdminView.module.css";
import { Link } from "react-router-dom";

export default function AdminView() {
  return (
    <div className={styles["adminFlex"]}>
      <div className={styles["parentAdmin"]}>
        <div className={styles["div1"]}>
          <h3>Agregar Producto </h3>
          <Link to="add" className={styles["linkAdminView"]}>
            <span
              className={`${styles["adminIcons"]} material-symbols-rounded`}
            >
              add_circle
            </span>
          </Link>
        </div>
        <div className={styles["div2"]}>
          <h3>Modifcar Producto</h3>
          <Link to="modify" className={styles["linkAdminView"]}>
            <span
              className={`${styles["adminIcons"]} material-symbols-rounded`}
            >
              inventory
            </span>
          </Link>
        </div>
        <div className={styles["div3"]}>
          <h3>Eliminar Producto</h3>
          <Link to="delete" className={styles["linkAdminView"]}>
            <span
              className={`${styles["adminIcons"]} material-symbols-rounded`}
            >
              delete
            </span>
          </Link>
        </div>
        <div className={styles["div4"]}>
          <h3>Administrar Usuarios</h3>
          <Link to="user" className={styles["linkAdminView"]}>
            <span
              className={`${styles["adminIcons"]} material-symbols-rounded`}
            >
              person
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
