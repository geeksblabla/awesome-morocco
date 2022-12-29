import React from "react";
// import styles from "../../styles/Blogs.module.css";
import FilterIconButton from "../FilterIconButton";
import styles from "../../styles/FilterBar.module.scss";


const BlogsFilterBar = ({
  filterOpen,
  setFilterOpen,
  blogsContent,
  setBlogsContent,
}) => {
  return (
    <div className={styles.filterbar}>

      <div className={styles.filterbuttons}>
        <button
            title="Feed"
            className={blogsContent == "FEED" ? styles.active : ""}
            onClick={() => {
              setBlogsContent("FEED");
            }}
          >
            Feed
          </button>
          <button
            title="Organizations"
            className={blogsContent == "ORGANIZATIONS" ? styles.active : ""}
            onClick={() => {
              setBlogsContent("ORGANIZATIONS");
            }}
          >
            Organizations
          </button>
          <button
            title="Authors"
            className={blogsContent == "AUTHORS" ? styles.active : ""}
            onClick={() => {
              setBlogsContent("AUTHORS");
            }}
          >
            Authors
          </button>
      </div>
      {/* <FilterIconButton
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
      /> */}
    </div>
  );
};

export default BlogsFilterBar;
