import { Bell, GraduationCap, Search } from "lucide-react"

export default function Header() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">

        <div className="flex items-center gap-2">
            <GraduationCap className="w-10 h-10 bg-black rounded-xl p-2" color="white" />
            <span className="font-semibold text-lg">EduLearn</span>
            <div className="bg-gray-200 px-2 py-1 font-semibold text-xs rounded-lg mx-2">Student</div>
        </div>

        <div className="relative w-96">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

            <input
                className="w-full pl-10 pr-4 py-2 rounded-lg border text-sm"
                placeholder="Search courses, assignments..."
            />
        </div>

        <div className="flex items-center gap-6">

            <div className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full px-1">
                    3
                </span>
            </div>

            <div className="flex items-center gap-2">
                <img
                    src="https://i.pravatar.cc/40"
                    className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium">Alex Johnson</span>
            </div>

        </div>
    </header>
  )
}