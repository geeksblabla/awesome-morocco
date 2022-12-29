import React from "react";
import styles from "../../styles/ReposDevs.module.scss";

import Devs from "./Devs";
import Repos from "./Repos";

const RepositoriesCards = ({ developers, projects }) => {
  return (
    <>
      {developers == true ? <Devs /> : <Repos projects={projects} />}
    </>
  );
};

export default RepositoriesCards;
