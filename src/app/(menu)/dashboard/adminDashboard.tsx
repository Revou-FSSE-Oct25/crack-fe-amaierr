import { StatCard } from "@/components/statCard";
import { Award, BookOpen, Clock, Star, Users } from "lucide-react";

const submissions = [
  {
    student: "Sarah Johnson",
    assignment: "React Final Project",
    course: "Web Development Course",
  },
  {
    student: "Mike Chen",
    assignment: "Database Assignment",
    course: "Database Fundamentals",
  },
  {
    student: "Emily Davis",
    assignment: "CSS Animation",
    course: "Advanced CSS",
  },
];

const performance = [
  { course: "Web Development", score: 89 },
  { course: "Database Fundamentals", score: 76 },
  { course: "Advanced CSS", score: 92 },
];

export default function AdminDashboard() {
  const totalStars = 5;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Total Course" icon={BookOpen} value="4" />
        <StatCard title="Total Students" icon={Users} value="2" />

        {/* Rating Card */}
        <div className="bg-white border rounded-xl p-6 flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Average Rating</p>

            <h3 className="text-2xl font-semibold mt-2">{2.4 /*rating*/}</h3>

            <div className="flex mt-2">
              {[...Array(totalStars)].map((_, index) => {
                const fillPercentage = Math.min(
                  Math.max(2.4 /*rating*/ - index, 0),
                  1,
                );

                return (
                  <div key={index} className="relative w-5 h-5">
                    {/* empty star */}
                    <Star className="absolute text-gray-300" size={20} />

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
                );
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
          <h2 className="font-medium mb-4">Recent Submissions</h2>

          <div className="space-y-4">
            {submissions.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border rounded-lg px-4 py-3"
              >
                <div>
                  <p className="font-medium">
                    {item.student} - {item.assignment}
                  </p>

                  <p className="text-sm text-gray-500">{item.course}</p>
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
          <h2 className="font-medium mb-4">Course Performance</h2>

          <div className="space-y-5">
            {performance.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.course}</span>

                  <span>{item.score}% avg</span>
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
  );
}
