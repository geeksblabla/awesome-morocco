import "~/styles/globals.css";

import { Poppins } from "next/font/google";
import { NavBar } from "~/components/navbar";
import { Footer } from "~/components/footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "Awesome Morocco",
  description: "List of awesome things in Morocco by developers for developers",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={` font-sans ${poppins.className}`}>
        <div className="page">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
