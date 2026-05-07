"use client";

import Sidebar from "@/components/layouts/sidebar";
import Header from "@/components/layouts/header";
import { useUserStore } from "@/stores/userStore";
import { GetAuthUserAPI, GetMenuAuthAPI } from "@/lib/API";
import { useEffect, useState } from "react";
import { MenuItem } from "@/interfaces/menuItem";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, updateUserDetail } = useUserStore();

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  useEffect(() => {
    async function fetchData() {
      const userRes = await GetAuthUserAPI();
      updateUserDetail(userRes);

      const menuItemsRes = await GetMenuAuthAPI();
      setMenuItems(await menuItemsRes);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Header user={user!} />

      <div className="flex h-[93vh]">
        <Sidebar menuItems={menuItems} />

        <main className="p-6 basis-full overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
