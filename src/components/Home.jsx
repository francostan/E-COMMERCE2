import React from "react";

import Header from "../commons/Header";
import SideBar from "./SideBar";
import styles from "../Styles/Home.module.css";
function Home() {
  return (
    <div>
      <div className={styles.space}></div>
      <Header className={styles.header} />
    </div>
  );
}

export default Home;
