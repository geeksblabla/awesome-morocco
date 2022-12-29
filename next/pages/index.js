import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import RepositoriesCards from "../components/RepositoriesCards";
import { getParsedYAML } from "../services/parser";

export default function Home({ data }) {
  const [developers, setDevelopers] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Awesome Morocco</title>
        <meta name="description" content="Made with <3 By Ismail Boularbah" />
        <link rel="icon" href="/site-icon.svg" />
      </Head>

      <Header
        headerTitle={"Open Source Projects"}
        haederDescription={
          "Explore latest innovations in the Tech world New here? Check our Tutorial on Open Source"
        }
      />
      <div className="mainContainer">
        <FilterBar
          developers={developers}
          setDevelopers={setDevelopers}
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
          projects={data}
        />
        <RepositoriesCards developers={developers} projects={data} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await getParsedYAML("projects.yaml");
  return {
    props: { data },
  };
};
