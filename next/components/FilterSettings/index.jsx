import React from "react";
import styles from "../../styles/FilterBar.module.css";

const FilterSettings = () => {
  return (
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
  );
};

export default FilterSettings;
