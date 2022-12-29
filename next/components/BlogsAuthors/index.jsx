import React from "react";
import Link from "next/link";
import styles from "../../styles/BlogsAuthors.module.scss";

import authors from "./data";

const BlogsAuthors = () => {
  return (
    <div className={styles.authors}>
      {authors.map((author, index) => (
        <div className={styles.author} key={index}>
          <div className={styles.authorImage}>
            <img src={author.photo} alt="Author Photo" />
          </div>
          <div className={styles.authorInfo}>
            <h2 className={styles.authorName}>{author.full_name}</h2>
            <div className={styles.authorStack}>{author.tech_stack}</div>
          </div>
          <div className={styles.authorButton}>
              <Link href="#" legacyBehavior>
                <a target="_blank"> Visit website </a>
              </Link>
            </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsAuthors;
