import React from "react";
import Link from "next/link";
import styles from "../../styles/PodcastsCard.module.css";

const PodcastsCard = ({ podcasts }) => {
  return (
    <div className={styles.podsWrapper}>
      {podcasts.map((podcast, index) => (
        <div className={styles.podCard} key={index}>
          <div className={styles.podCardImage}>
            <img src="/podcastsImages/podcast_img1.png" alt="Podcast Image" />
          </div>
          <div className={styles.podCardText}>
            <Link href={podcast.url}>
              <h2>{podcast.name}</h2>
            </Link>
            <p>{podcast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PodcastsCard;
