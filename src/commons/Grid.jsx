import React from "react";
import WineCard from "./WineCard";
import styles from "../Styles/Grid.module.css";
import { fakeData } from "../utils/fakeData";

//ListVinos recibe del componente padre el array de la api con los vinos y fakeData se cambia por ese array

export default function ({ listVinos }) {
  return (
    <div>
      <ul className={styles.layoutDeVinos}>
        {fakeData?.map((element) => {
          return <WineCard key={element.id} vino={element} />;
        })}
      </ul>
    </div>
  );
}
