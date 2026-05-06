"use client";

import CourseCard from "@/components/courseCard";
import CourseFilters from "@/components/filter";
import { Course } from "@/interfaces/course";
import { GetUnenrolledCourses } from "@/lib/API";
import { useEffect, useState } from "react";

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function fetchData() {
      const coursesRes = await GetUnenrolledCourses();
      // const test = courses;
      // console.log(test);
      setCourses(coursesRes);
    }

    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      {/* Page Header */}

      <div>
        <h1 className="text-2xl font-semibold">Course Catalog</h1>
        <p className="text-gray-500">
          Discover new skills and advance your career
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
  );
}
