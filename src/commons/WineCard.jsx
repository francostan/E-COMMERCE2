import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/WineCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../store/user";
import axios from "axios";

//Link esta comentado lo importante ahi es poner el enlace a la vista del componente individual
//Este componente recibe un vino y trabaja la data a renderizar

export default function WineCard({ vino }) {
  //hacemos un estado local para guardar los favoritos

  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);

  // const handleClickFav = (e) => {
  //   //traemos name y email del user para que encuentre primero al usuario
  //   const { name, email } = user;
  //   //traemos los datos necesarios para agregar ese vino a la tabla ProductUser
  //   const {
  //     marca,
  //     descripcion,
  //     bodega,
  //     nombre,
  //     tipo,
  //     precio,
  //     valoracion,
  //     stock,
  //     images,
  //   } = vino;
  //   //hacemos post con los datos necesarios por el req.body
  //   axios
  //     .post("api/products/add", {
  //       name,
  //       email,
  //       marca,
  //       descripcion,
  //       bodega,
  //       nombre,
  //       tipo,
  //       precio,
  //       valoracion,
  //       stock,
  //       images: images[0].url,
  //     })
  //     .then((res) => res.data)
  //     .then((producto) => {
  //       console.log(producto);
  //       //y despachamos para que se agregue al store
  //       alert("Producto agregado a favoritos");
  //     })
  //     .catch((err) => console.error(err));
  // };

  // const handleClickCart = (e) => {};

  // console.log(vino);

  return (
    <>
      <Link to={`/products/${vino.id}`}>
        <li>
          <div className={styles.card}>
            <div
              className={styles.img1}
              style={{
                backgroundImage: `url(${vino.images})`,
              }}
            ></div>

            {/* <div className={styles.title}>{vino.nombre}</div> */}
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
    </>
  );
}

//   return (
//     <>
//       {/* <Link
//         to={`url de vinos individuales}`}
//       > */}
//       <li>
//         <div className={styles.card}>
//           {typeof vino.images === "string" ?
//           <div
//           className={styles.img1}
//           style={{
//             backgroundImage: `url(${vino.images})`,
//           }}

//         ></div> : <div
//         className={styles.img1}
//         style={{
//           backgroundImage: `url(${vino.images[0].url})`,
//         }}

//       ></div>}

//           <div className={styles.title}>{vino.nombre}</div>
//           <div className={styles.text}>{vino.descripcion}</div>

//           <div className={styles.catagory}>
//             {vino.tipo}
//             <i className="fas fa-film"></i>
//           </div>

//           <div className={styles.views}>
//             {vino.bodega}
//             <i className="far fa-eye"></i>{" "}
//           </div>
//         </div>
//         {typeof vino.images !== "string" ?
//         <div >
//           <button className={styles.button} onClick={handleClickFav}>Agregar a favoritos</button>
//           <button className={styles.button} onClick={handleClickCart}>Agregar a carrito</button>
//         </div> : <button className={styles.button} onClick={handleClickCart}>Agregar a carrito</button>}

//       </li>
//       {/* </Link> */}
//     </>
//   );
// }
