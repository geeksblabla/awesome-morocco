import React from "react";
import Link from "next/link";
import styles from "../../../styles/ReposDevs.module.scss";

const Repos = ({ projects }) => {
  return (
    <>
    <div className={styles.language}>
      <span>JavaScript</span>
    </div>
    <div className={styles.repositories}>
      {projects.map((repository, index) => (
        <div className={styles.repositorie} key={`repo-${index}`}>
          <div className={styles.repositorieInfo}>
            <Link href={repository.url} key={index} legacyBehavior>
              <a target="_blank" title={`${repository.name} By ${repository.author}`}>
                <h2 className={styles.repositorieName}>{repository.name}</h2>
              </a>
            </Link>
            <h5 className='authorTag'>{repository.author}</h5>

            <p className={styles.repositorieDesc}>{repository.description}</p>
            <div className={styles.repositorieTags}>
              {repository.tags?.map((tag) => (
                <span title={tag} key={tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.repositorieStates}>
            <div className={styles.singleState}>
              <span>
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3621 4.47089L7.96896 4.16293L6.64395 0.900031C6.40559 0.30611 5.59236 0.30611 5.35399 0.900031L4.02898 4.17026L0.642846 4.47089C0.0259095 4.52221 -0.226474 5.32877 0.243239 5.75405L2.81614 8.08574L2.04497 11.5466C1.90476 12.1772 2.55675 12.6758 3.08956 12.3385L5.99897 10.5054L8.90839 12.3458C9.4412 12.6831 10.0932 12.1845 9.95297 11.5539L9.1818 8.08574L11.7547 5.75405C12.2244 5.32877 11.979 4.52221 11.3621 4.47089ZM5.99897 9.13427L3.36297 10.7987L4.06404 7.66046L1.73651 5.54875L4.80717 5.27012L5.99897 2.31518L7.19779 5.27745L10.2685 5.55608L7.94092 7.6678L8.64198 10.806L5.99897 9.13427Z"
                    fill="#6B7280"
                  />
                </svg>
              </span>
              <span>{repository.stars}</span>
            </div>

            <div className={styles.singleState}>
              <span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.71826 6.5C3.71826 6.83 3.98826 7.1 4.31826 7.1H9.11826C9.44826 7.1 9.71826 6.83 9.71826 6.5C9.71826 6.17 9.44826 5.9 9.11826 5.9H4.31826C3.98826 5.9 3.71826 6.17 3.71826 6.5ZM6.71826 0.5C3.40626 0.5 0.718262 3.188 0.718262 6.5C0.718262 9.812 3.40626 12.5 6.71826 12.5C10.0303 12.5 12.7183 9.812 12.7183 6.5C12.7183 3.188 10.0303 0.5 6.71826 0.5ZM6.71826 11.3C4.07226 11.3 1.91826 9.146 1.91826 6.5C1.91826 3.854 4.07226 1.7 6.71826 1.7C9.36426 1.7 11.5183 3.854 11.5183 6.5C11.5183 9.146 9.36426 11.3 6.71826 11.3Z"
                    fill="#6B7280"
                  />
                </svg>
              </span>
              <span>{repository.issues}</span>
            </div>

            <div className={styles.singleState}>
              <span>
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.75441 8.98193C9.29657 8.98193 8.88694 9.16265 8.57368 9.44578L4.2785 6.94578C4.30862 6.80723 4.33272 6.66867 4.33272 6.5241C4.33272 6.37952 4.30862 6.24096 4.2785 6.10241L8.52549 3.62651C8.85079 3.92771 9.2785 4.11446 9.75441 4.11446C10.7544 4.11446 11.5616 3.30723 11.5616 2.30723C11.5616 1.30723 10.7544 0.5 9.75441 0.5C8.75441 0.5 7.94718 1.30723 7.94718 2.30723C7.94718 2.45181 7.97127 2.59036 8.00139 2.72892L3.75441 5.20482C3.4291 4.90361 3.00139 4.71687 2.52549 4.71687C1.52549 4.71687 0.718262 5.5241 0.718262 6.5241C0.718262 7.5241 1.52549 8.33133 2.52549 8.33133C3.00139 8.33133 3.4291 8.14458 3.75441 7.84337L8.04356 10.3494C8.01344 10.4759 7.99537 10.6084 7.99537 10.741C7.99537 11.7108 8.78453 12.5 9.75441 12.5C10.7243 12.5 11.5134 11.7108 11.5134 10.741C11.5134 9.77108 10.7243 8.98193 9.75441 8.98193Z"
                    fill="#6B7280"
                  />
                </svg>
              </span>
              <span>{repository.forks}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Repos;
