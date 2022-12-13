import Link from "next/link";
import React from "react";
import styles from "../../styles/BlogsOrgs.module.css";

const BlogsOrgs = ({ orgs }) => {
  return (
    <div className={styles.orgsWrapper}>
      {orgs.map((org, index) =>
        org.type == "professional" ? (
          <div className={styles.orgCard} key={index}>
            <div className={styles.orgCardImage}>
              <img src={org.image} alt="Organization Image" />
            </div>
            <div className={styles.orgCardText}>
              <h4>{org.author}</h4>
              <h2>{org.name}</h2>
              <p>{org.description}</p>
              <Link href={org.url} legacyBehavior>
                <a target="_blank">
                  <span>Visit website {"-->"}</span>
                </a>
              </Link>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default BlogsOrgs;
