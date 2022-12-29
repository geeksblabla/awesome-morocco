import React from "react";
import styles from "../../styles/FilterBar.module.scss";

const FilterSettings = ({ projects }) => {
  return (
    <div>
      <div className={styles.filterOpen}>
        <div className={styles.filterOptions}>
          <div>
            <h3>Languages</h3>
            <div className={styles.filterLanguages}>
              { projects.map((project) => 
                project.tags.map((tag) => <button key={tag}>{tag}</button>)
              )}
            </div>
          </div>

          <div>
            <h3>Tags</h3>
            <div className={styles.filterTags}>
              {projects.map((project) =>
                project.tags.map((tag) => <span key={tag}>{tag}</span>)
              )}
            </div>
          </div>

          <div>
            <h3>Sort</h3>
            <div className={styles.filterSorts}>
              <div>
                <input type="radio" id="most_recent"  name="sort-filter"/>
                <label for="most_recent" >Most recent</label>
              </div>
              <div>
                <input type="radio" id="by_stars" name="sort-filter"/>
                <label for="by_stars" >By Stars</label>
              </div>
              <div>
                <input type="radio" id="by_issues" name="sort-filter"/>
                <label for="by_issues">By Issues</label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.filterButtons}>
          <button className={styles.clearFilters}>Clear (3)</button>
          <button className={styles.applyFilter}>Apply Filter</button>
        </div>
      </div>
    </div>
  );
};

export default FilterSettings;
