'use client'

import Link from "next/link"
import { iconMap } from "@/lib/iconMap"
import { GraduationCap, Settings } from "lucide-react"
import { useState } from "react"

type MenuItem = {
  label: string
  path: string
  icon: string
  count: number | null
}

export default function Sidebar({ menu }: { menu: MenuItem[] }) {
  return (
    <aside className="w-64 bg-white border-r h-full flex flex-col">
      <div className="flex items-center gap-2 px-4 py-4 border-b">
        <GraduationCap className="w-6 h-6" />
        <span className="font-semibold text-lg">Learning Hub</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menu.map((item, index) => {
          return (
            <SidebarItem key={index} item={item} index={index}/>
          )
        })}
      </nav>

      <div className="p-4 border-t">
        <SidebarItem item={{path: 'setting', label: 'Settings', icon: "Settings", count: null}} index={-1} />
      </div>


    </aside>
  )
}

function SidebarItem({ item, active = false, index }: { item: MenuItem, active?: boolean, index: number }) {
  const Icon = iconMap[item.icon]

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Link
      href={item.path}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer
      ${activeIndex === index ? "bg-gray-100 font-medium" : "hover:bg-gray-100"}`}
      onClick={() => handleClick(index)}
    >
      {Icon && <Icon size={18}/>}
      <span>{item.label}</span>
    </Link>
  )
}

