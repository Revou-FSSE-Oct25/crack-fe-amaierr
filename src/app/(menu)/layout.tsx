import Sidebar from "@/components/layouts/sidebar";
import Header from "@/components/layouts/header";
import { getMenuAuth, getSession } from "@/lib/auth";

const menuItems = await getMenuAuth();
const user = await getSession();
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header user={user} />

      <div className="flex h-[93vh]">
        <Sidebar menuItems={menuItems} />

        <main className="p-6 basis-full overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
