import axios from "axios";
import React, { useEffect, useState } from "react";
import CardItems from "../commons/CardItems";
import styles from "../Styles/Cart.module.css";

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/carts`)
      .then((res) => {
        const arrProduct = res.data.map((vino) => {
          return {
            ...vino.product,
            stockdB: vino.product.stock,
            stock: vino.stock,
            productId: vino.productId,
          };
        });
        setProducts(arrProduct);
      })
      .catch((err) => console.log("error", err));
  }, []);

  const subTot = products.reduce((a, c) => a + c.stock * c.precio, 0);

  console.log(subTot);
  console.log(products);

  return (
    <>
      <section className={styles.header}>
        <div className={styles.container1}>
          <h1>Carrito de Compras</h1>
        </div>
      </section>
      <section className={styles.cart}>
        <div className={styles.container2}>
          <div className={styles.row}>
            <div className={styles.tableContainer}>
              <table>
                <thead className={styles.tHead}>
                  <tr className={styles.tableTitle}>
                    <th>PRODUCTO</th>
                    <th>DESCRIPCION</th>
                    <th>CANTIDAD</th>
                    <th>PRECIO</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className={styles.tBody}>
                  {products &&
                    products.map((elemento) => {
                      return <CardItems vino={elemento} />;
                    })}
                  <tr>
                    <td></td>
                    <td>Subtotal:</td>
                    <td>
                      <p>${subTot}</p>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.buttonShop}>
                <div>
                  <button>CONTINUAR COMPRANDO</button>
                </div>
                <div>
                  <button>FINALIZAR COMPRA</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
