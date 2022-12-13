import React from "react";
import styles from "../../styles/PodcastsRadio.module.css";

import radios from "./data";

const PodcastRadio = () => {
  return (
    <div className={styles.radioContainer}>
      <h3>Latest Podcasts Released</h3>
      <div className={styles.radioWrapper}>
        {radios.map((radio, index) => (
          <div className={styles.radioCard} key={index}>
            <div className={styles.radioImage}>
              <img src={radio.image} alt="Radio Image" />
            </div>
            <div className={styles.radioText}>
              <h2>{radio.title}</h2>
              <p>{radio.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastRadio;
