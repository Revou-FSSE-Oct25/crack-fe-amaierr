import { Search } from "lucide-react";
import Dropdown from "./dropdown";
import { GetAllCategoriesAPI } from "@/lib/API";
import { FocusEvent, useEffect, useState } from "react";
import { Category } from "@/interfaces/category";
import toast from "react-hot-toast";

type Props = {
  setTitleFilter: (value: string) => void;
  defaultCategory: string;
  setCategoryValue: (value: string) => void;
  defaultLevel: string;
  setLevelValue: (value: string) => void;
};

export default function CourseFilters({
  setTitleFilter,
  defaultCategory,
  setCategoryValue,
  defaultLevel,
  setLevelValue,
}: Props) {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const categoryRes = await GetAllCategoriesAPI();
        categoryRes.unshift({ name: "All Categories", id: "" });
        setCategory(categoryRes);
      } catch (error: any) {
        toast.error(error.message);
      }
    }

    fetchData();
  }, []);

  const levelOptions = [
    { name: "All Levels", id: "" },
    { name: "Beginner", id: "Beginner" },
    { name: "Intermediate", id: "Intermediate" },
    { name: "Advanced", id: "Advanced" },
  ];

  const onTitleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setTitleFilter(event.target.value);
  };

  return (
    <div className="flex gap-4 items-center mb-6">
      {/* Search */}
      <div className="flex items-center gap-2 border rounded-lg px-3 py-2 flex-1 bg-gray-50">
        <Search size={16} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search courses title..."
          className="bg-transparent outline-none w-full text-sm"
          onBlur={onTitleBlur}
        />
      </div>

      {/* Category */}
      <Dropdown
        options={category}
        value={defaultCategory}
        setValue={setCategoryValue}
      />

      {/* Level */}
      <Dropdown
        options={levelOptions}
        value={defaultLevel}
        setValue={setLevelValue}
      />
    </div>
  );
}
