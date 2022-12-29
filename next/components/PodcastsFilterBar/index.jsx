import React from "react";
import styles from "../../styles/FilterBar.module.scss";

const PodcastsFilterBar = ({
  podcastContent,
  setPodcastContent,
}) => {
  return (
    <div className={styles.filterbar}>
      <div className={styles.filterbuttons}>
        <button
          title="Podcasts"
          className={podcastContent == "PODCASTS" ? styles.active : ""}
          onClick={() => {
            setPodcastContent("PODCASTS");
          }}
        >
          Podcasts
        </button>
        <button
          title="Radio"
          className={podcastContent == "RADIO" ? styles.active : ""}
          onClick={() => {
            setPodcastContent("RADIO");
          }}
        >
          Radio
        </button>
      </div>
    </div>
  );
};

export default PodcastsFilterBar;
