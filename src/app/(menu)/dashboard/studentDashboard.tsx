import { Award, BookOpen, Clock, TrendingUp } from "lucide-react";
import { StatCard } from "./page";

type Activity = {
  title: string
  time: string
  highlight?: boolean
}

const activities: Activity[] = [
  {
    title: "Completed: Introduction to React",
    time: "2 hours ago",
    highlight: true,
  },
  {
    title: "Assignment submitted: JavaScript Fundamentals",
    time: "1 day ago",
  },
  {
    title: "Enrolled in: Advanced CSS Techniques",
    time: "3 days ago",
  },
]

type Deadline = {
  title: string
  course: string
  due: string
  status?: "urgent" | "normal"
}

const deadlines: Deadline[] = [
  {
    title: "React Project Submission",
    course: "Web Development Course",
    due: "Due in 2 days",
    status: "urgent",
  },
  {
    title: "Database Design Quiz",
    course: "Database Fundamentals",
    due: "Due in 5 days",
  },
  {
    title: "CSS Animation Assignment",
    course: "Advanced CSS",
    due: "Due in 1 week",
  },
]

export default function StudentDashboard(){
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Enrolled Courses" icon={BookOpen} value="4" />
        <StatCard title="Completed" icon={Award} value="2" />

        {/* Progress Card */}
        <div className="bg-white border rounded-xl p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Overall Progress</p>
            <TrendingUp size={18} className="text-gray-400" />
          </div>

          <h3 className="text-2xl font-semibold">67%</h3>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-black h-2 rounded-full"
              style={{ width: `67%` }}
            />
          </div>
        </div>
        {/* End */}

        <StatCard title="Pending Tasks" icon={Clock} value="3" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border">

          {/* Recent Activity */}
          <h2 className="font-medium mb-6">Recent Activity</h2>
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-4">

                <div
                  className={`mt-2 h-2 w-2 rounded-full ${
                    activity.highlight ? "bg-black" : "bg-gray-300"
                  }`}
                />

                <div>
                  <p className="text-sm">{activity.title}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Deadline */}
        <div className="bg-white p-6 rounded-xl border">
          <h2 className="font-medium mb-6">Upcoming Deadlines</h2>
          <div className="space-y-4">

            {deadlines.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 flex justify-between items-center"
              >

                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.course}</p>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    item.status === "urgent"
                      ? "bg-red-700 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {item.due}
                </span>

              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}