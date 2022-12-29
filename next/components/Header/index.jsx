import React from "react";
import styles from "../../styles/Header.module.scss";

const Header = ({ headerTitle, haederDescription }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <h1>{headerTitle}</h1>
        <p>{haederDescription}</p>
      </div>
    </div>
  );
};

export default Header;
