import CourseCard from "@/components/courseCard"
import CourseFilters from "@/components/filter"

const courses = [
  {
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    description:
      "Learn modern web development from scratch with HTML, CSS, JavaScript, React, and Node.js.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    level: "Beginner",
    duration: "40 hours",
    students: "12,456",
    rating: 4.8,
    progress: 45,
  },
  {
    title: "Python for Data Science",
    instructor: "Dr. Michael Chen",
    description:
      "Master Python programming for data analysis, visualization, and machine learning.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    level: "Intermediate",
    duration: "35 hours",
    students: "8,932",
    rating: 4.6,
    progress: 23,
  },
  {
    title: "Advanced JavaScript Concepts",
    instructor: "James Wilson",
    description:
      "Deep dive into advanced JavaScript topics including closures, prototypes, and async programming.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    level: "Advanced",
    duration: "28 hours",
    students: "6,543",
    rating: 4.7,
    progress: 78,
  },
]

export default function CoursesPage() {
  return (
    

    <div className="space-y-6">

      {/* Page Header */}

      <div>
        <h1 className="text-2xl font-semibold">My Courses</h1>
        <p className="text-gray-500">
          Continue your learning journey
        </p>
      </div>

      {/* Filters */}

      <CourseFilters />

      {/* Courses */}

      <div className="grid grid-cols-3 gap-6">

        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}

      </div>

    </div>
  )
}