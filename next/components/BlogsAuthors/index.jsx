import React from "react";
import Link from "next/link";
import styles from "../../styles/BlogsAuthors.module.css";

import authors from "./data";

const BlogsAuthors = () => {
  return (
    <div className={styles.authorsWrapper}>
      {authors.map((author, index) => (
        <div className={styles.authorCard} key={index}>
          <div className={styles.authorCardImage}>
            <img src={author.photo} alt="Author Photo" />
          </div>
          <div className={styles.authorCardText}>
            <h2>{author.full_name}</h2>
            <p>{author.tech_stack}</p>
            <Link href="">Visit the website</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsAuthors;
