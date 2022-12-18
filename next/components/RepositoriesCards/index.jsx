import React from "react";
import styles from "../../styles/ReposDevs.module.css";

import Devs from "./Devs";
import Repos from "./Repos";

const RepositoriesCards = ({ developers, projects }) => {
  return (
    <>
      <div className={styles.language}>
        <p></p>
        <span>JavaScript</span>
      </div>
      {developers == true ? <Devs /> : <Repos projects={projects} />}
    </>
  );
};

export default RepositoriesCards;
