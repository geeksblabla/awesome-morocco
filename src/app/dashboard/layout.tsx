import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { MenuItems } from "~/components/dashboard/menu-items";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <div className="mx-4 max-w-screen-lg  sm:mx-8 xl:mx-auto">
        <div className="flex justify-end">
          <UserButton showName={true} />
        </div>

        <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
          <MenuItems />
          <div className="col-span-8 overflow-hidden rounded-xl  px-8 pb-8 shadow">
            {children}
          </div>
        </div>
      </div>
    </ClerkProvider>
  );
}
