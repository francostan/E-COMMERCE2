import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../Styles/CardItems.module.css";

export default function CardItems({ vino }) {
  console.log(vino);

  const user = useSelector((state) => state.user);
  const { images, nombre, stock, precio, id } = vino;
  const [stockValue, setStockValue] = useState();

  useEffect(() => {
    setStockValue(vino.stock);
  }, []);

  /*   const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  }; */

  const decreaseItem = () => {
    axios
      .delete("api/carts/item", {
        data: { userId: user.id, productId: id },
      })
      .then((res) => {
        setStockValue(stockValue - 1);

        console.log("decreased");
      })
      .catch((err) => console.log("ERROR EN DEL", err));
  };

  const deleteItem = () => {
    axios
      .delete("/api/carts/itemId", {
        data: { userId: user.id, productId: id },
      })
      .then((res) => console.log("deleted"))
      .catch((err) => console.log("ERROR EN DEL", err));
  };

  const increaseItem = () => {
    axios
      .post("/api/carts/add", {
        userId: user.id,
        productId: id,
        stock: stock,
      })
      .then((res) => {
        setStockValue(stockValue + 1);

        console.log("ADDED");
      })
      .catch((err) => console.log("ERROR EN DEL", err));
  };

  console.log("userId", user.id);
  console.log("productId", vino.id);

  return (
    <>
      <tr>
        <td>
          <img src={images} alt="imagen-vino" className={styles.imagen} />
        </td>
        <td className={styles.fdRow}>{nombre}</td>
        <td className={styles.fdRow}>
          <div className={styles.buttonContainer}>
            <input
              type="button"
              //disabled={count <= 1}
              className={styles.button}
              onClick={decreaseItem}
              value={"-"}
            />
            <span>
              <input className={styles.input} value={stockValue} />
            </span>
            <input
              type="button"
              //disabled={count >= 6}
              className={styles.button}
              onClick={increaseItem}
              value="+"
            />
          </div>
        </td>
        <td className={styles.precio}>$ {precio * stockValue}</td>
        <td>
          <span class="material-symbols-rounded" onClick={deleteItem}>
            delete
          </span>
        </td>
      </tr>
    </>
  );
}
