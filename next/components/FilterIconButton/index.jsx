import React from "react";
import styles from "../../styles/FilterBar.module.css";

const FilterIconButton = ({ filterOpen, setFilterOpen }) => {
  return (
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
  );
};

export default FilterIconButton;
