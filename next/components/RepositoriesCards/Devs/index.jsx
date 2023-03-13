import React from "react";
import styles from "../../../styles/ReposDevs.module.css";

import developersList from "../developers_data";

const Devs = () => {
  return (
    <div className={styles.developers}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Company</th>
            <th>Location</th>
            <th>Top Repository</th>
            <th>Contributions</th>
          </tr>
        </thead>

        {developersList.map((developer, index) => (
          <tbody key={index}>
            <tr>
              <td>{developer.id}</td>
              <td>
                <img src={developer.avatar} alt="Developer Avatar" />
              </td>
              <td className={styles.nameUserName}>
                <span>{developer.name}</span>
                <span>@{developer.username}</span>
              </td>
              <td>{developer.company}</td>
              <td>{developer.location}</td>
              <td>{developer.topRepos}</td>
              <td>{developer.contributions}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Devs;
