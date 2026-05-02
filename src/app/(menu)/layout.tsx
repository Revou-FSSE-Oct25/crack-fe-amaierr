import Sidebar from "@/components/layouts/sidebar";
import Header from "@/components/layouts/header";
import { getMenuAuth } from "@/lib/auth";

const menuItems = await getMenuAuth();
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />

      <div className="flex h-[93vh]">
        <Sidebar menuItems={menuItems} />

        <main className="p-6 basis-full overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
