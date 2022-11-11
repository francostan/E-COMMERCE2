import axios from "axios";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styles from "../Styles/SingleProduct.module.css";

const SingleProduct = ({ product }) => {
  const { id, nombre, images, bodega, descripcion, variedad, precio, stock } =
    product;

  const user = useSelector((state) => state.user);
  const [count, setCount] = useState(1);
  const [stockVal, setStockVal] = useState(null);
  const navigate = useNavigate();

  console.log(product);

  const value = useRef(null);

  if (!value.current)
    setTimeout(() => {
      setStockVal(stock);
      value.current = value.current + 1;
    }, 350);

  const increase = () => {
    setCount(count + 1);
    setStockVal(stockVal - 1);
  };

  const decrease = () => {
    setCount(count - 1);
    setStockVal(stockVal + 1);
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("/api/carts/add", { userId: user.id, productId: id, stock: count })
      .then((result) => console.log("PRODUCTO AGREGADO", result))
      .catch((err) => console.log("error", err));
  };

  return (
    <div className={styles.box}>
      <div className={styles.container} key={id}>
        <div className={styles.imgBox}>
          <div className={styles.imgCont}>
            <img src={images} alt={`${nombre}`} className={styles.img} />
          </div>
        </div>
        <div className={styles.productDetails}>
          <div className={styles.bodega}>{bodega}</div>
          <div className={styles.title}>{nombre}</div>
          <div className={styles.cepa}>{variedad}</div>
          <div className={styles.descriptionContainer}>
            <p className={styles.descriptionContent}>{descripcion}</p>
          </div>
          <div className={styles.priceContainer}>
            <span className={styles.precio}>${precio}</span>
            <div>
              <p className={styles.stock}>En Stock</p>
              <p className={styles.stock}>{stockVal - 1}uds.</p>
            </div>
          </div>
          <div className={styles.qty}>
            <span style={{ fontWeight: "800", paddingLeft: "2rem" }}>
              CANTIDAD
            </span>
            <div className={styles.control}>
              <div className={styles.inputButtons}>
                <input
                  disabled={count <= 1}
                  className={styles.button}
                  onClick={decrease}
                  type="button"
                  value={"-"}
                />
              </div>
              <input className={styles.input} value={count} />
              <div className={styles.inputButtons}>
                <input
                  disabled={count === stock}
                  className={styles.button}
                  onClick={increase}
                  type="button"
                  value={"+"}
                />
              </div>
            </div>
          </div>
          <div className={styles.comprar}>
            <button style={{ cursor: "pointer" }} onClick={handleClick}>
              COMPRAR
            </button>
          </div>

          <div className={styles.favorites}>
            <span>Agregar a Favoritos </span>
          </div>
          <div>
            <span className={styles.cart}>Ir al Carrito</span>
            <div className={styles.carrito}>
              <span
                class="material-symbols-rounded"
                onClick={() => navigate("/carts")}
              >
                shopping_cart
              </span>
            </div>
          </div>
          {/*  </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
