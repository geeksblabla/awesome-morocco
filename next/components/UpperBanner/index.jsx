import React from "react";
import styles from "../../styles/UpperBanner.module.css";

const UpperBanner = () => {
  return (
    <div className={styles.upperbanner}>
      <p>
        This website is part of the <a href="">geeksblabla</a> open source
        projects
      </p>
      <button>
        <svg
          width="11"
          height="12"
          viewBox="0 0 9 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.80034 0.229428C8.53413 -0.0663631 8.1041 -0.0663631 7.83788 0.229428L4.5 3.9306L1.16212 0.221843C0.895905 -0.0739477 0.46587 -0.0739477 0.199659 0.221843C-0.0665529 0.517634 -0.0665529 0.99545 0.199659 1.29124L3.53754 5L0.199659 8.70876C-0.0665529 9.00455 -0.0665529 9.48237 0.199659 9.77816C0.46587 10.0739 0.895905 10.0739 1.16212 9.77816L4.5 6.0694L7.83788 9.77816C8.1041 10.0739 8.53413 10.0739 8.80034 9.77816C9.06655 9.48237 9.06655 9.00455 8.80034 8.70876L5.46246 5L8.80034 1.29124C9.05973 1.00303 9.05973 0.517634 8.80034 0.229428Z"
            fill="#F9FAFB"
          />
        </svg>
      </button>
    </div>
  );
};

export default UpperBanner;
