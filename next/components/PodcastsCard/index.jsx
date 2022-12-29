import React from "react";
import Link from "next/link";
import styles from "../../styles/PodcastsCard.module.scss";

const PodcastsCard = ({ podcasts }) => {
  return (
    <div className={styles.podcasts}>
      {podcasts.map((podcast, index) => (
        <div className={styles.podcast} key={index}>
          <div className={styles.podcastImage}>
            <img src={podcast.image} width="40px" alt="Podcast Image" />
          </div>
          <div className={styles.podcastContent}>
            <Link href={podcast.url}>
              <h2 className={styles.podcastAuthor}>{podcast.name}</h2>
            </Link>
            <p className={styles.podcastDesc}>{podcast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PodcastsCard;
