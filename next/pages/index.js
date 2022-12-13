import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import UpperBanner from "../components/UpperBanner";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import RepositoriesCards from "../components/RepositoriesCards";

import fs from "fs/promises";
import path from "path";
import * as matter from 'gray-matter';

export default function Home({ data }) {
  const [developers, setDevelopers] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  let matterData = matter(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Awesome Morocco UI</title>
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
        />
        <RepositoriesCards developers={developers} projects={matterData.data} />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "content", "projects.yaml");
  const yamlData = await fs.readFile(filePath);
  let data = yamlData.toString(undefined);

  return {
    props: { data },
  };
};
