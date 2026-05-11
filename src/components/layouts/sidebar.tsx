"use client";

import Link from "next/link";
import { iconMap } from "@/lib/iconMap";
import { GraduationCap, Settings } from "lucide-react";
import { useState } from "react";
import { MenuItem } from "@/interfaces/menuItem";

export default function Sidebar({ menuItems }: { menuItems: MenuItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number>(-2);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <aside className="w-64 bg-white border-r h-full flex flex-col">
      <div className="flex items-center gap-2 px-4 py-4 border-b">
        <GraduationCap className="w-6 h-6" />
        <span className="font-semibold text-lg">Learning Hub</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          return (
            <SidebarItem
              key={item.menuIndex}
              item={item}
              activeIndex={activeIndex}
              handleClick={handleClick}
            />
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <SidebarItem
          item={{
            menu: { path: "settings", label: "Settings", icon: "Settings" },
            menuIndex: -1,
          }}
          activeIndex={activeIndex}
          handleClick={handleClick}
        />
      </div>
    </aside>
  );
}

function SidebarItem({
  item,
  activeIndex,
  handleClick,
}: {
  item: MenuItem;
  activeIndex: number;
  handleClick: (index: number) => void;
}) {
  const Icon = iconMap[item.menu.icon];

  return (
    <Link
      href={`/${item.menu.path}`}
      className={`flex justify-between px-4 py-2 rounded-lg cursor-pointer
      ${activeIndex === item.menuIndex ? "bg-gray-200 font-medium" : "hover:bg-gray-100"}`}
      onClick={() => handleClick(item.menuIndex)}
    >
      <div className="flex gap-3 items-center">
        {Icon && <Icon size={18} />}
        <span>{item.menu.label}</span>
      </div>
      {item.menu.count && (
        <span className="bg-gray-100 rounded-md size-auto p-1 text-center text-sm font-semibold">
          {item.menu.count}
        </span>
      )}
    </Link>
  );
}
