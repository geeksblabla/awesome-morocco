import Link from "next/link";
import React from "react";
import styles from "../../styles/BlogsOrgs.module.css";

import orgs from "./data";

const BlogsOrgs = () => {
  return (
    <div className={styles.orgsWrapper}>
      {orgs.map((org, index) => (
        <div className={styles.orgCard} key={index}>
          <div className={styles.orgCardImage}>
            <img src={org.image} alt="Organization Image" />
          </div>
          <div className={styles.orgCardText}>
            <h2>{org.title}</h2>
            <p>{org.description}</p>
            <Link href="">
              <span>Visit website {"-->"}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsOrgs;
