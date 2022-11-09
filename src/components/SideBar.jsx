import React from "react";
import styles from "../Styles/SideBar.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function SideBar() {
  const user = useSelector((state) => state.user);
  return (
    <div className={styles.fatherContainer}>
      <div className={styles.labelContainer}>
        <label for="checking" className={styles.labelMenu}>
          <i class="fi fi-br-menu-burger"></i>
        </label>
      </div>
      <input className={styles.checkbox} type="checkbox" id="checking" />

      <div className={styles.sideBarContainer}>
        <nav className={styles.options}>
          <label for="checking" className={styles.cross}>
            <i class="fi fi-br-cross"></i>
          </label>
          {user.email ? (
            <>
              <Link className={styles.linkSide} to="/">
                <div>Carrito</div>
              </Link>
              <Link className={styles.linkSide} to="/favoritos">
                <div>Favoritos</div>
              </Link>
              <Link className={styles.linkSide} to="/">
                <div>Mis compras</div>
              </Link>
              <Link className={styles.linkSide} to="/">
                <div>Ayuda</div>
              </Link>
            </>
          ) : (
            <Link className={styles.linkSide} to="/login">
              <a className={styles.needToLog}>
                Necesitas estar logueado para ver opciones
              </a>
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
