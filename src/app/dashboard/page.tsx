import { Award, BookOpen, Clock, TrendingUp } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-4 gap-6">

      <StatCard title="Enrolled Courses" icon={BookOpen} value="4" />

      <StatCard title="Completed" icon={Award} value="2" />

      <StatCard title="Overall Progress" icon={TrendingUp} value="67%" />

      <StatCard title="Pending Tasks" icon={Clock} value="3" />

    </div>
  )
}

function StatCard({ title, value, icon: Icon }: any) {
  return (
    <div className="bg-white p-6 rounded-xl border">
      <div className="flex justify-between">
        <p className="text-sm text-black font-semibold">{title}</p>
        <Icon size={18} strokeWidth={1} />
      </div>
      <h3 className="text-2xl font-semibold mt-2">{value}</h3>
    </div>
  )
}