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
        description="Explore latest innovations in the Tech world New here? Check our Tutorial on Open Source"
      />
      <main className="mx-auto flex  max-w-screen-lg flex-1 flex-col items-center justify-center  text-center">
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
        {children}
      </main>
    </>
  );
}
