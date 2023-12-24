import { OsRankingTable } from "~/components/os-ranking-table";

// ReGenerate the page every 24 hours
export const revalidate = 86400;

export default function Page() {
  return <OsRankingTable />;
}
