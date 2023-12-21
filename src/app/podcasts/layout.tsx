import { PageBanner } from "~/components/page-banner";
import { TabsList } from "~/components/tabs-list";
import blogSrc from "~/assets/blogs.png";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageBanner
        title="Podcasts"
        description="Listen and explore the best podcasts from moroccan developers and listen to latest episodes"
        image={blogSrc}
      />
      <main className="mx-auto flex  max-w-screen-lg flex-1 flex-col items-center justify-center  text-center">
        <TabsList
          routes={[
            { name: "Podcasts", link: "/podcasts" },
            { name: "Radio", link: "/podcasts/radio" },
          ]}
        />
        {children}
      </main>
    </>
  );
}
