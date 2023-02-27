import React from "react";
import styles from "../../styles/Header.module.css";

const Header = ({ headerTitle, haederDescription }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerText}>
        <h1>{headerTitle}</h1>
        <p>{haederDescription}</p>
      </div>

      <div className={styles.headerImage}>
        <img src="/header_image.png" alt="Header Image" />
      </div>
    </div>
  );
};

export default Header;
