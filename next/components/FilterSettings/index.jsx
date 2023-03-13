import React from "react";
import styles from "../../styles/FilterBar.module.css";

const FilterSettings = ({ projects }) => {
  return (
    <div>
      <div className={styles.filterOpen}>
        <div className={styles.filterOpenWrapper}>
          <div>
            <h3>Languages</h3>
            <div>
              {projects.map((project) =>
                project.tags.map((tag) => <button key={tag}>{tag}</button>)
              )}
            </div>
          </div>

          <div>
            <h3>Tags</h3>
            <div>
              {projects.map((project) =>
                project.tags.map((tag) => <span key={tag}>{tag}</span>)
              )}
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
  );
};

export default FilterSettings;
