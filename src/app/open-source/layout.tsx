import { PageBanner } from "~/components/page-banner";
import { TabsList } from "~/components/tabs-list";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageBanner
        title="Open Source"
        description="Explore latest open source projects from Moroccan Developers and Get started with your first contribution"
      />
      <TabsList
        routes={[
          { name: "Projects", link: "/open-source" },
          { name: "Ranking", link: "/open-source/ranking" },
          {
            name: "First Contribution",
            link: "/open-source/first-contribution",
          },
        ]}
      />
      <main className="sm:px-none mx-auto  flex max-w-screen-lg flex-1 flex-col items-center  justify-center px-4 text-center">
        {children}
      </main>
    </>
  );
}
