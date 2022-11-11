import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItems from "../commons/CardItems";
import styles from "../Styles/Cart.module.css";
import { setSubTotal } from "../store/subtotal";
import MercadoPago from "./MercadoPago";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const subTotal = useSelector((state) => state.subtotal);
  const user = useSelector((state) => state.user);

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
  // dispatch(setSubTotal(subTotal));

  const mercadopago = products.map((elemento) => {
    return {
      userId: user.id,
      total: subTot,
      ...elemento,
      name: elemento.nombre,
      price: elemento.precio,
      image: elemento.images,
      description: elemento.descripcion,
      quantity: elemento.stock,
    };
  });

  let order = products.map((elemento) => {
    return {
      userId: user.id,
      total: subTot,
    };
  });

  order = order[0];

  console.log("mp es ", mercadopago);
  const handleDelete = async () => {
    const borrado = await axios.delete("/api/carts");
    window.location.reload();
  };

  const handleCompra = () => {};

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
                      <p>{`$ ${subTot} `} </p>
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
                  <MercadoPago carrito={mercadopago} order={order} />
                </div>
                <div>
                  <button>
                    <span
                      class="material-symbols-rounded"
                      onClick={handleDelete}
                    >
                      delete
                    </span>
                  </button>
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
