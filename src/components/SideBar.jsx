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
              <Link className={styles.linkSide} to={`/favoritos/${user.id}`}>
                <div>Favoritos</div>
              </Link>
              <Link className={styles.linkSide} to="/">
                <div>Mis compras</div>
              </Link>
              <Link className={styles.linkSide} to="/">
                <div>Ayuda</div>
              </Link>
              {user.isAdmin ? (
                <Link className={styles.linkSide} to="/admin">
                  <div>Admin</div>
                </Link>
              ) : null}
            </>
          ) : (
            <Link className={styles.linkSide} to="/login">
              <div className={styles.needToLog}>
                Necesitas estar logueado para ver opciones
              </div>
              <di>Click Para Ingresar</di>
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
