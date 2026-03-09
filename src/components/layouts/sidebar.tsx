import {
  LayoutDashboard,
  BookOpen,
  Compass,
  FileText,
  Calendar,
  MessageCircle,
  Award,
  TrendingUp,
  Settings,
  GraduationCap
} from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-full flex flex-col">

        <div className="flex items-center gap-2 px-4 py-4 border-b">
            <GraduationCap className="w-6 h-6" />
            <span className="font-semibold text-lg">Learning Hub</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">

            <SidebarItem icon={LayoutDashboard} label="Dashboard" active />

            <SidebarItem icon={BookOpen} label="My Courses" />

            <SidebarItem icon={Compass} label="Browse Courses" />

            <SidebarItem icon={FileText} label="Assignments" />

            <SidebarItem icon={Calendar} label="Calendar" />

            <SidebarItem icon={MessageCircle} label="Discussions" />

            <SidebarItem icon={Award} label="Certificates" />

            <SidebarItem icon={TrendingUp} label="Progress" />

        </nav>

        <div className="p-4 border-t">
            <SidebarItem icon={Settings} label="Settings" />
        </div>

    </aside>
  )
}

function SidebarItem({ icon: Icon, label, active = false }: any) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer
      ${active ? "bg-gray-100 font-medium" : "hover:bg-gray-100"}`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </div>
  )
}