import Sidebar from "@/components/layouts/sidebar"
import Header from "@/components/layouts/header"

const studentMenuItems = [
    { index: 1, path: 'dashboard', label: 'Dashboard', icon: "Home" },
    { index: 2, path: 'my-courses', label: 'My Courses', icon: "BookOpen", count: 14 },
    { index: 3, path: 'courses', label: 'Browse Course', icon: "GraduationCap" },
]

const instructorMenuItems = [
  { index: 1, path: 'dashboard', label: 'Dashboard', icon: "Home" },
  { index: 2, path: 'my-courses', label: 'My Courses', icon: "BookOpen", count: 14 },
  { index: 3, path: 'create-course', label: 'Create Course', icon: "CirclePlus" },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>

      <Header />

      <div className="flex h-[93vh]">

        <Sidebar menu={instructorMenuItems} />

        <main className="p-6 basis-full overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  )
}