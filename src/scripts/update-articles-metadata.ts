#!/usr/bin/bun

await import("../env.mjs");
import { getXataClient } from "~/xata";
import { getURLOpenGraphMetadata } from "~/utils/get-url-open-graph-metadata";
import { type Operation, logResults } from "./utils";

/**
 * This script will go throw articles with missed metadata and try to extract the metadata from the article url and update the article table in the database.
 */
const MAX_ARTICLES_PER_EXECUTION = 10;

type Article = {
  id: string;
  url: string;
};

const updateMetadata = async (article: Article): Promise<boolean> => {
  try {
    const articleMetadata = await getURLOpenGraphMetadata(article.url);
    if (articleMetadata === null) {
      return false;
    }

    await getXataClient().db.articles.update(article.id, {
      title: articleMetadata.ogTitle,
      description: articleMetadata.ogDescription,
      image: articleMetadata.ogImage?.[0]?.url ?? "",
      open_graph_retrieved_count: { $increment: 1 },
    });
    return true;
  } catch (error) {
    console.error("🚨 Error updating article metadata", error);
    return false;
  }
};

const updateArticlesMetadata = async () => {
  // select articles with missing metadata
  const articles = await getXataClient()
    .db.articles.filter({ $notExists: "title" })
    .select(["url", "id"])
    .getPaginated({
      pagination: { size: MAX_ARTICLES_PER_EXECUTION },
    });

  if (articles.records.length === 0) {
    console.log("✅ No articles with missing metadata");
    return;
  }

  console.log(`✅ start processing ${articles.records.length} articles`);
  const operations: Operation[] = [];
  for (const article of articles.records) {
    const isSuccess = await updateMetadata(article as Article);
    operations.push({
      label: article.url ?? "No Url",
      isSuccess,
    });
  }
  console.log(`✅ finished processing ${articles.records.length} articles`);
  logResults(operations);
};

await updateArticlesMetadata();
