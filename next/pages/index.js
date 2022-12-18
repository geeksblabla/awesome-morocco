import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import UpperBanner from "../components/UpperBanner";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import RepositoriesCards from "../components/RepositoriesCards";
import { getParsedYAML } from "../services/parser";

export default function Home({ data }) {
  const [developers, setDevelopers] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Awesome Morocco</title>
        <meta name="description" content="Made with <3 By Ismail Boularbah" />
        <link rel="icon" href="/site-icon.svg" />
      </Head>

      <div className={styles.main}>
        <UpperBanner />
        <Navbar />
        <Header
          headerTitle={"Open Source Projects"}
          haederDescription={
            "Explore latest innovations in the Tech world New here? Check our Tutorial on Open Source"
          }
        />
        <FilterBar
          developers={developers}
          setDevelopers={setDevelopers}
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
          projects={data}
        />
        <RepositoriesCards developers={developers} projects={data} />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await getParsedYAML("projects.yaml");
  return {
    props: { data },
  };
};
