import { PageBanner } from "~/components/page-banner";
import { TabsList } from "~/components/tabs-list";
import blogSrc from "~/assets/blogs.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageBanner
        title="Blogs"
        description="Explore blogs from Morocco Developers and Get the latest blog posts in one place"
        image={blogSrc}
      />
      <main className="mx-auto flex  max-w-screen-lg flex-1 flex-col items-center justify-center  text-center">
        <TabsList
          routes={[
            { name: "Blogs", link: "/blogs" },
            { name: "Feed", link: "/blogs/feed" },
            { name: "Start ✍️", link: "/blogs/start" },
          ]}
        />
        {children}
      </main>
    </>
  );
}
