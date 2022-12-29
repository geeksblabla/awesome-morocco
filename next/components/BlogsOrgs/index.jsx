import Link from "next/link";
import React from "react";
import styles from "../../styles/BlogsOrgs.module.scss";

const BlogsOrgs = ({ orgs }) => {
  return (
    <div className={styles.organizations}>
      {orgs.map((org, index) =>
        org.type == "professional" ? (
          <div className={styles.organization} key={index}>
            <div className={styles.organizationImage}>
              <img src={org.image}  alt="Organization Image" />
            </div>
            <div className={styles.organizationText}>
              <h4 className='authorTag'>{org.author}</h4>
              <h2 className={styles.organizationName}>{org.name}</h2>
              <p className={styles.organizationDesc}>{org.description}</p>
            </div>
            <div className={styles.organizationButton}>
              <Link href={org.url} legacyBehavior>
                <a target="_blank"> Visit website </a>
              </Link>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default BlogsOrgs;
