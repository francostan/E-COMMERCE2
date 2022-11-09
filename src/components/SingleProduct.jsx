import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styles from "../Styles/SingleProduct.module.css";
import { fakeData } from "../utils/fakeData";

const SingleProduct = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  const [count, setCount] = useState(1);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  /*   const [product, setProduct] = useState({});

  useEffect(() => {
    if (id !== undefined) {
      const { data } = axios.get(`/api/products/${id}`);
      console.log(data);
      setProduct(data);
    }
    return () => {
      console.log("product");
    };
  }, [id]);
  console.log(product);

return null; */

  useEffect(() => {
    axios.get(`/api/products/${id}`).then((data) => setProducto(data.data));
  }, []);

  return (
    <div className={styles.container} key={id}>
      <div className={styles.imgContainer}>
        <div className={styles.img}>
          <img src={producto.images} alt={`${producto.title}`} />
        </div>
      </div>
      <div className={styles.productDetails}>
        <div className={styles.bodega}>{producto.bodega}</div>
        <div className={styles.title}>{producto.nombre}</div>
        <div className={styles.cepa}>{producto.cepa}</div>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionContent}>{producto.descripcion}</p>
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.precio}>${producto.precio}</span>
          <span className={styles.stock}>En Stock</span>
        </div>
        <div className={styles.qty}>
          <span style={{ fontWeight: "800", paddingLeft: "2rem" }}>
            CANTIDAD
          </span>
          <div className={styles.control}>
            <button
              disabled={count <= 1}
              className={styles.button}
              onClick={decrease}
            >
              -
            </button>
            <span>
              <input className={styles.input} value={count} />
            </span>
            <button className={styles.button} onClick={increase}>
              +
            </button>{" "}
            {/* disabled cuanto count sea >= que el Stock  */}
          </div>
        </div>
        <div className={styles.comprar}>
          <button style={{ cursor: "pointer" }}>COMPRAR</button>
        </div>
        {/* Link al carrito */}
        {/*  <Link to="/favoritos"> */}
        <div className={styles.favorites}>
          <span> Agregar a Favoritos</span>
        </div>
        {/*  </Link> */}
      </div>
    </div>
  );
};

export default SingleProduct;
