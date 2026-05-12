"use client";

import CourseCard from "@/components/courseCard";
import CourseFilters from "@/components/filter";
import { Course } from "@/interfaces/course";
import { GetMyCoursesAPI } from "@/lib/API";
import { useMyCourseFilterStore } from "@/stores/my-courseFilterStore";
import { useUserStore } from "@/stores/userStore";
import { useEffect, useState } from "react";

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const { isInstructor } = useUserStore();
  const { category, level, setCategory, setLevel } = useMyCourseFilterStore();

  useEffect(() => {
    async function fetchData() {
      const coursesRes = await GetMyCoursesAPI();
      setCourses(coursesRes);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const coursesRes = await GetMyCoursesAPI();
      setCourses(coursesRes);
    }

    fetchData();
  }, [category, level]);

  return (
    <div className="space-y-6">
      {/* Page Header */}

      <div>
        <h1 className="text-2xl font-semibold">My Courses</h1>
        <p className="text-gray-500">Continue your learning journey</p>
      </div>

      {/* Filters */}

      <CourseFilters
        defaultCategory={category}
        defaultLevel={level}
        setCategoryValue={setCategory}
        setLevelValue={setLevel}
      />

      {/* Courses */}

      <div className="grid grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} isInstructor={isInstructor} />
        ))}
      </div>
    </div>
  );
}
