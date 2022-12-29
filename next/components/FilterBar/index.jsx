import React from "react";
import styles from "../../styles/FilterBar.module.scss";
import FilterIconButton from "../FilterIconButton";

import FilterSettings from "../FilterSettings";

const FilterBar = ({
  developers,
  setDevelopers,
  filterOpen,
  setFilterOpen,
  projects,
}) => {
  return (
    <div className={styles.filterbar}>

        <div className={styles.filterbuttons}>
          <button
            title="Repositories"
            onClick={() => {
              setDevelopers(false);
            }}
            className={developers != false ? "" : styles.active}
          >
            Repositories
          </button>

          {/* <button
            title="Developers"
            onClick={() => {
              setDevelopers(true);
            }}
            className={developers != true ? "" : styles.active}
          >
            Developers
          </button> */}
        </div>
        {/* <FilterIconButton
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
        /> */}
      {/* {filterOpen == true ? <FilterSettings projects={projects} /> : null} */}
    </div>
  );
};

export default FilterBar;
