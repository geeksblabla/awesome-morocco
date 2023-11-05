import { ClerkProvider, UserButton, auth } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { redirect } from "next/navigation";
import { MenuItems } from "~/components/dashboard/menu-items";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <div className="mx-4 max-w-screen-lg flex-1  sm:mx-8 xl:mx-auto">
        <div className="flex justify-end">
          <UserButton showName={true} />
        </div>

        <div className="grid flex-1 grid-cols-8 pt-8 sm:grid-cols-10">
          <MenuItems />
          <div className="col-span-8 overflow-hidden rounded-xl  border border-secondary-500/40 bg-primary-900/10 px-8 pb-8 shadow">
            {children}
          </div>
        </div>
      </div>
    </ClerkProvider>
  );
}
