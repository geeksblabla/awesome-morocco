import React from "react";
import Link from "next/link";
import styles from "../../styles/BlogsFeed.module.css";

import feeds from "./data";

const BlogsFeed = () => {
  return (
    <div className={styles.feedWrapper}>
      {feeds.map((feed, index) => (
        <div className={styles.feedCard} key={index}>
          <div className={styles.feedCardImage}>
            <img src={feed.image} alt="Feed Image" />
          </div>
          <div className={styles.feedCardText}>
            <h2>{feed.title}</h2>
            <p>{feed.description}</p>
            <b>{feed.publish_date}</b>
          </div>
          <div className={styles.feedCardReadMore}>
            <Link href="">
              <span>Read More</span>
              <span>
                <svg
                  width="8"
                  height="15"
                  viewBox="0 0 8 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.274649 14.2258C0.639597 14.5914 1.22798 14.5914 1.59293 14.2258L7.78215 8.02598C8.07262 7.73501 8.07262 7.26499 7.78215 6.97402L1.59293 0.774181C1.22798 0.408606 0.639597 0.408606 0.274649 0.774181C-0.0902987 1.13975 -0.0902987 1.72915 0.274649 2.09472L5.66694 7.50373L0.267201 12.9127C-0.0902989 13.2709 -0.0902987 13.8677 0.274649 14.2258Z"
                    fill="#6B7280"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsFeed;
