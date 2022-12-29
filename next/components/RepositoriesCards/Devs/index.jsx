import React from "react";
import styles from "../../../styles/ReposDevs.module.scss";

import developersList from "../developers_data";

const Devs = () => {
  return (
    <div className={styles.developers}>
      <div className={styles.developers}>
          <ul className={styles.developersInfo}>
            <li> <span> # </span> Photo</li>
            <li>Name</li>
            <li>Company</li>
            <li>Location</li>
            <li>Top Repository</li>
            <li>Contributions</li>
          </ul>

          {developersList.map((developer, index) => (
            <div className={styles.developer} key={index}> 
              <div className={styles.developerImage}>
                <div>{developer.id}</div>
                <img src={developer.avatar} alt="Developer Avatar" />
              </div>
              <div className={styles.developerName}>
                <span>{developer.name}</span>
                <span>@{developer.username}</span>
              </div>
              <div>{developer.company}</div>
              <div>{developer.location}</div>
              <div>{developer.topRepos}</div>
              <div>{developer.contributions}</div>
            </div>
          ))}

      </div>
    </div>
  );
};

export default Devs;
