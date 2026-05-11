"use client";

import { Course } from "@/interfaces/course";
import { EnrollCourseAPI } from "@/lib/API";
import { Clock, Users, Star, Play, SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";
import LevelCategory from "./levelCategory";
import Link from "next/link";

type CourseCardProps = {
  course: Course;
  isInstructor?: boolean;
};

export default function CourseCard({ course, isInstructor }: CourseCardProps) {
  const router = useRouter();

  const handleEnrollClick = async () => {
    const result = await EnrollCourseAPI(course.id);
    router.push("/my-courses");
    return result;
  };

  return (
    <div className="bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition">
      {/* Image */}

      <div className="relative">
        <img
          src={course.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"}
          alt={course.name}
          className="w-full h-48 object-cover"
        />

        <div className="absolute top-3 right-3">
          <LevelCategory level={course.levelType} />
        </div>
      </div>

      {/* Content */}

      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-lg">{course.name}</h3>

        <p className="text-sm text-gray-500">by {course.instructor.name}</p>

        <p className="text-sm text-gray-600 line-clamp-2">
          {course.description}
        </p>

        {/* Course Stats */}

        <div className="flex gap-4 text-xs text-gray-500 items-center">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            {course.duration}
          </div>

          <div className="flex items-center gap-1">
            <Users size={14} />
            {course.students}
          </div>

          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={14} className="fill-yellow-500" />
            {course.rating}
          </div>
        </div>

        {(!isInstructor &&
          ((course.enrollments && (
            <>
              {/* Progress */}
              <div>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Progress</span>
                  <span>{course.enrollments[0].progressPercentage}%</span>
                </div>

                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-black h-2 rounded-full"
                    style={{
                      width: `${course.enrollments[0].progressPercentage}%`,
                    }}
                  />
                </div>
              </div>

              {/* Button */}
              <Link
                href={`/my-courses/${course.id}`}
                className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700"
              >
                <Play size={16} />
                Continue Learning
              </Link>
            </>
          )) || (
            <button
              onClick={handleEnrollClick}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border hover:bg-gray-300"
            >
              Enroll Now
            </button>
          ))) || (
          <Link
            href={`/my-courses/${course.id}`}
            className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700"
          >
            <SquarePen size={16} />
            Edit Course
          </Link>
        )}
      </div>
    </div>
  );
}
