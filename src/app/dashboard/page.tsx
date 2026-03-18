import { Award, BookOpen, Clock, Star, TrendingUp, Users } from "lucide-react"

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

const submissions = [
    {
      student: "Sarah Johnson",
      assignment: "React Final Project",
      course: "Web Development Course"
    },
    {
      student: "Mike Chen",
      assignment: "Database Assignment",
      course: "Database Fundamentals"
    },
    {
      student: "Emily Davis",
      assignment: "CSS Animation",
      course: "Advanced CSS"
    }
  ]

  const performance = [
    { course: "Web Development", score: 89 },
    { course: "Database Fundamentals", score: 76 },
    { course: "Advanced CSS", score: 92 }
  ]

export default function DashboardPage() {
  return (
    // <StudentDashboard/>
    <AdminDashboard/>
  )
}

function StudentDashboard(){
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

function AdminDashboard(){
  const totalStars = 5

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Total Course" icon={BookOpen} value="4" />
        <StatCard title="Total Students" icon={Users} value="2" />

        {/* Rating Card */}
        <div className="bg-white border rounded-xl p-6 flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Average Rating</p>

            <h3 className="text-2xl font-semibold mt-2">{2.4/*rating*/}</h3>

            <div className="flex mt-2">
              {[...Array(totalStars)].map((_, index) => {
                const fillPercentage = Math.min(
                  Math.max(2.4/*rating*/ - index, 0),
                  1
                )

                return (
                  <div key={index} className="relative w-5 h-5">
                    
                    {/* empty star */}
                    <Star
                      className="absolute text-gray-300"
                      size={20}
                    />

                    {/* filled portion */}
                    <div
                      className="absolute overflow-hidden"
                      style={{ width: `${fillPercentage * 100}%` }}
                    >
                      <Star
                        className="text-yellow-400 fill-yellow-400"
                        size={20}
                      />
                    </div>

                  </div>
                )
              })}
            </div>
          </div>

          <Award className="text-gray-400" size={18} />
        </div>
        {/* End */}

        <StatCard title="Pending Grades" icon={Clock} value="3" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border">

          {/* Recent Submission */}
          <h2 className="font-medium mb-4">
            Recent Submissions
          </h2>

          <div className="space-y-4">

            {submissions.map((item, index) => (
              <div key={index} className="flex justify-between items-center border rounded-lg px-4 py-3">
                <div>

                  <p className="font-medium">
                    {item.student} - {item.assignment}
                  </p>

                  <p className="text-sm text-gray-500">
                    {item.course}
                  </p>

                </div>

                <button className="border px-4 py-1 rounded-lg text-sm hover:bg-gray-100">
                  Grade
                </button>

              </div>
            ))}

          </div>
        </div>

        {/* Course Performance */}
        <div className="bg-white p-6 rounded-xl border">
          <h2 className="font-medium mb-4">
            Course Performance
          </h2>

          <div className="space-y-5">

            {performance.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span>
                    {item.course}
                  </span>

                  <span>
                    {item.score}% avg
                  </span>
                </div>

                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    style={{ width: `${item.score}%` }}
                    className="h-2 bg-black rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
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
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  )
}