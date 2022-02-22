import React from "react";
import { RepoCard } from "@/components/OSS/RepoCard";
const repoList = [
  "https://github.com/redux-saga/redux-saga",
  "https://github.com/yjose/reactjs-popup",
  "https://github.com/smakosh/react-flex-ready",
  "https://github.com/smakosh/gatsby-portfolio-dev",
  "https://github.com/Ezelia/eureca.io",
  "https://github.com/elmehdibm/react-basic-items-pagination",
  "https://github.com/khofaai/kh-popover",
  "https://github.com/JefferyHus/v-odometer",
  "https://github.com/JefferyHus/es6-crawler-detect",
  "https://github.com/khofaai/vue-dropify",
  "https://github.com/simoebenhida/vuejs-suglify",
  "https://github.com/Kafiil/salat",
  "https://github.com/akiyamaSM/corona-wash-reminder",
  "https://github.com/EOussama/typewriterjs",
];
const OSS = () => {
  return (
    <div className="flex justify-center  grow py-4 px-6">

    <div className="flex  flex-wrap  justify-center md:w-11/12   w-full">
     
      {repoList.map((url)=> <RepoCard url={url} key={url}/>)
     }

    </div>
    </div>
  );
};
export default OSS;
