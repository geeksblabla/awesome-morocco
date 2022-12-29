import Link from "next/link";
import React from "react";
import styles from "../../styles/MentorsCards.module.scss";

const MentorsCards = ({ mentors }) => {
  return (
    <div className={styles.mentors}>
      {mentors.map((mentor, index) => (
        <div className={styles.mentor} key={index}>
          <div className={styles.mentorInfo}>
            <div className={styles.mentorImage}>
              <img src={mentor.image} alt="User Avatar" />
            </div>
            <div className={styles.mentorHead}>
              <div className={styles.mentorName}>
                 <Link href={mentor.url} legacyBehavior>
                  <a target="_blank">
                    <h2 className={styles.mentorFullName}>{mentor.name}</h2>
                  </a>
                </Link>
                <h3 className={styles.mentorCompany}>{ `${mentor.company ? '@' : ''}`  }{mentor.company}</h3>
              </div>
                <span className={styles.mentorMoreOptions}>
                  <Link href="">
                    <svg
                      width="14"
                      height="4"
                      viewBox="0 0 14 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.67827 3.16619C1.25639 3.16619 0.894176 3.01705 0.591619 2.71875C0.293324 2.41619 0.144176 2.05398 0.144176 1.6321C0.144176 1.21449 0.293324 0.856534 0.591619 0.558239C0.894176 0.259943 1.25639 0.110795 1.67827 0.110795C2.08736 0.110795 2.44531 0.259943 2.75213 0.558239C3.05895 0.856534 3.21236 1.21449 3.21236 1.6321C3.21236 1.91335 3.13991 2.17116 2.99503 2.40554C2.8544 2.63565 2.66903 2.82102 2.43892 2.96165C2.20881 3.09801 1.95526 3.16619 1.67827 3.16619ZM7.0396 3.16619C6.61772 3.16619 6.2555 3.01705 5.95295 2.71875C5.65465 2.41619 5.5055 2.05398 5.5055 1.6321C5.5055 1.21449 5.65465 0.856534 5.95295 0.558239C6.2555 0.259943 6.61772 0.110795 7.0396 0.110795C7.44869 0.110795 7.80664 0.259943 8.11346 0.558239C8.42028 0.856534 8.57369 1.21449 8.57369 1.6321C8.57369 1.91335 8.50124 2.17116 8.35636 2.40554C8.21573 2.63565 8.03036 2.82102 7.80025 2.96165C7.57013 3.09801 7.31658 3.16619 7.0396 3.16619ZM12.4009 3.16619C11.979 3.16619 11.6168 3.01705 11.3143 2.71875C11.016 2.41619 10.8668 2.05398 10.8668 1.6321C10.8668 1.21449 11.016 0.856534 11.3143 0.558239C11.6168 0.259943 11.979 0.110795 12.4009 0.110795C12.81 0.110795 13.168 0.259943 13.4748 0.558239C13.7816 0.856534 13.935 1.21449 13.935 1.6321C13.935 1.91335 13.8626 2.17116 13.7177 2.40554C13.5771 2.63565 13.3917 2.82102 13.1616 2.96165C12.9315 3.09801 12.6779 3.16619 12.4009 3.16619Z"
                        fill="#111827"
                      />
                    </svg>
                  </Link>
                  </span>
            </div>
          </div>

          <div className={styles.mentorContent}>
            <p className={styles.mentorDescription}>{mentor.description}</p>
            <div className={styles.mentorTechStack}>
              {mentor.technologies.map((technology, index) => (
                <span key={index}>{technology}</span>
              ))}
            </div>
          </div>
          
          <div className={styles.mentorBookButton}>
            <button onClick={() => alert('Coming soon')}>
                Book a session
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MentorsCards;
