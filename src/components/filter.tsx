import { Search } from "lucide-react"
import Dropdown from "./dropdown"

export default function CourseFilters() {

  const defaultDropDown = "all"
  const categoryOptions = [
    { label: "All Categories", value: "all" },
    { label: "Web Development", value: "web" },
    { label: "Data Science", value: "data" },
    { label: "Marketing", value: "marketing" },
    { label: "Design", value: "design" },
  ]
  const levelOptions = [
    { label: "All Levels", value: "all" },
    { label: "Beginner", value: "beginner" },
    { label: "Intermediate", value: "intermediate" },
    { label: "Advanced", value: "advanced" },
  ]

  return (
    <div className="flex gap-4 items-center mb-6">

      {/* Search */}
      <div className="flex items-center gap-2 border rounded-lg px-3 py-2 flex-1 bg-gray-50">
        <Search size={16} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search courses..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Category */}
      <Dropdown
        options={categoryOptions}
        value={defaultDropDown}
      />

      {/* Level */}
      <Dropdown
        options={levelOptions}
        value={defaultDropDown}
      />

    </div>
  )
}