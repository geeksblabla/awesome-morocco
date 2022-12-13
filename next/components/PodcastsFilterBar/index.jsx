import React from "react";
import styles from "../../styles/Blogs.module.css";

const PodcastsFilterBar = ({
  filterOpen,
  setFilterOpen,
  podcastContent,
  setPodcastContent,
}) => {
  return (
    <div className={styles.filterbar}>
      <div className={styles.filters}>
        <div className={styles.filterbuttons}>
          <button
            title="Podcasts"
            className={podcastContent == "PODCASTS" ? styles.active : ""}
            onClick={() => {
              setPodcastContent("PODCASTS");
            }}
          >
            Podcasts
          </button>
          <button
            title="Radio"
            className={podcastContent == "RADIO" ? styles.active : ""}
            onClick={() => {
              setPodcastContent("RADIO");
            }}
          >
            Radio
          </button>
        </div>

        <div className={styles.filterIcon}>
          <button
            onClick={() => {
              setFilterOpen(!filterOpen);
            }}
          >
            <span>Filter</span>
            <span>
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 12H10C10.55 12 11 11.55 11 11C11 10.45 10.55 10 10 10H8C7.45 10 7 10.45 7 11C7 11.55 7.45 12 8 12ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1ZM4 7H14C14.55 7 15 6.55 15 6C15 5.45 14.55 5 14 5H4C3.45 5 3 5.45 3 6C3 6.55 3.45 7 4 7Z"
                  fill="#6B7280"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {filterOpen == true ? (
        <div>
          <div className={styles.filterOpen}>
            <div className={styles.filterOpenWrapper}>
              <div>
                <h3>Languages</h3>
                <div>
                  <button>JavaScript(42)</button>
                  <button>TypeScript(13)</button>
                  <button>Java(11)</button>
                  <button>Python(31)</button>
                  <button>Go(3)</button>
                  <button>PHP(14)</button>
                </div>
              </div>

              <div>
                <h3>Tags</h3>
                <div>
                  <span>Machine Learning</span>
                  <span>Database</span>
                  <span>Documentation</span>
                  <span>Extentions</span>
                  <span>Typesafty</span>
                  <span>Nodejs</span>
                </div>
              </div>

              <div>
                <h3>Sort</h3>
                <div>
                  <div>
                    <input type="radio" />
                    <span>Most recent</span>
                  </div>
                  <div>
                    <input type="radio" />
                    <span>By Stars</span>
                  </div>
                  <div>
                    <input type="radio" />
                    <span>By Issues</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.filterButtons}>
              <button>Clear (3)</button>
              <button>Apply Filter</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PodcastsFilterBar;
