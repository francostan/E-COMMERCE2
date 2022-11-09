import React, { useEffect, useState } from "react";
import styles from "../Styles/SingleProduct.module.css";

const SingleProduct = ({ product }) => {
  const { id, nombre, images, bodega, descripcion, variedad, precio, stock } =
    product;

  const stockValue = stock;

  const [count, setCount] = useState(1);
  const [stockVal, setStockVal] = useState(stockValue);

  const increase = () => {
    setCount(count + 1);
    setStockVal(stockVal - 1);
  };
  const decrease = () => {
    setCount(count - 1);
    setStockVal(stockVal + 1);
  };

  console.log(stockVal);
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

  return (
    <div className={styles.container} key={id}>
      <div className={styles.imgContainer}>
        <div className={styles.img}>
          <img src={images} alt={`${nombre}`} />
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
            <p className={styles.stock}>{stockVal}uds.</p>
          </div>
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
