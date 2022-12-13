import React from "react";
import styles from "../../styles/PodcastsCard.module.css";

import podcasts from "./data";

const PodcastsCard = () => {
  return (
    <div className={styles.podsWrapper}>
      {podcasts.map((podcast, index) => (
        <div className={styles.podCard} key={index}>
          <div className={styles.podCardImage}>
            <img src={podcast.image} alt="Podcast Image" />
          </div>
          <div className={styles.podCardText}>
            <h2>{podcast.title}</h2>
            <p>{podcast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PodcastsCard;
