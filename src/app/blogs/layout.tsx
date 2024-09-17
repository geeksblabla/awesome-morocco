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
        description="Explore blogs from Moroccan Developers and Get the latest blog posts in one place"
        image={blogSrc}
      />
      <TabsList
        routes={[
          { name: "Blogs", link: "/blogs" },
          { name: "Feed", link: "/blogs/feed" },
          { name: "Start ✍️", link: "/blogs/start" },
        ]}
      />
      <main className="mx-auto flex  max-w-screen-lg flex-1 flex-col items-center justify-center  text-center">
        {children}
      </main>
    </>
  );
}
