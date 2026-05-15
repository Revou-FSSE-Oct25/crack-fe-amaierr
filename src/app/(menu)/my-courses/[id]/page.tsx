"use client";

import { useEffect, useState } from "react";
import {
  Clock,
  Download,
  MessageSquare,
  Star,
  Users,
  BadgeCheck,
} from "lucide-react";
import { GetCourseDetailAPI } from "@/lib/API";
import { redirect, useParams } from "next/navigation";
import toast from "react-hot-toast";
import LevelCategory from "@/components/levelCategory";
import { useUserStore } from "@/stores/userStore";
import AssignmentsTab from "./tabs/assignments";
import CurriculumsTab from "./tabs/curriculums";
import ReviewsTab from "./tabs/reviews";
import { CourseDetail } from "@/interfaces/courseDetail";
import { Curriculum } from "@/interfaces/curriculumn";

type Assignment = {
  id: number;
  title: string;
  dueDate: string;
  points: number;
  status: "pending" | "submitted";
  grade?: string;
};

const assignments: Assignment[] = [
  {
    id: 1,
    title: "Build a Personal Portfolio Website",
    dueDate: "2024-01-15",
    points: 100,
    status: "pending",
  },
  {
    id: 2,
    title: "Interactive JavaScript Calculator",
    dueDate: "2024-01-22",
    points: 75,
    status: "submitted",
    grade: "85/75",
  },
];

export default function CourseDetailPage() {
  const [activeTab, setActiveTab] = useState<
    "curriculum" | "assignments" | "reviews"
  >("curriculum");

  const [coursesDetail, setCoursesDetail] = useState<CourseDetail>();
  const [changedTimes, setChangedTimes] = useState(0);
  const params = useParams<{ id: string }>();
  const { isInstructor } = useUserStore();


  useEffect(() => {
    async function fetchData() {
      let courseRes;
      try {
        courseRes = await GetCourseDetailAPI(params.id);
      } catch (error: any) {
        toast.error(error.message);
        redirect("/my-courses");
      }
      setCoursesDetail(courseRes);
    }

    fetchData();
  }, []);
  
  useEffect(() => {
    async function fetchData() {
      let courseRes;
      try {
        courseRes = await GetCourseDetailAPI(params.id);
      } catch (error: any) {
        toast.error(error.message);
        redirect("/my-courses");
      }
      setCoursesDetail(courseRes);
    }

    fetchData();
  }, [changedTimes]);

  return (
    <>
      {coursesDetail && (
        <div className="space-y-6">
          {/* Top Section */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_320px]">
            {/* Course Banner */}
            <div className="relative overflow-hidden rounded-2xl border bg-white">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Course Banner"
                width={1400}
                height={700}
                className="h-125 w-full object-cover"
              />
            </div>

            {/* Course Tools */}
            <div className="h-fit rounded-2xl border bg-white p-6">
              <h2 className="mb-6 text-center text-2xl font-semibold">
                Course Tools
              </h2>

              <div className="space-y-4">
                <button className="flex w-full items-center justify-center gap-3 rounded-xl border px-4 py-4 font-medium transition hover:bg-gray-50">
                  <Download size={18} />
                  Download Resources
                </button>

                <button className="flex w-full items-center justify-center gap-3 rounded-xl border px-4 py-4 font-medium transition hover:bg-gray-50">
                  <MessageSquare size={18} />
                  Discussion Forum
                </button>

                <button className="flex w-full items-center justify-center gap-3 rounded-xl border px-4 py-4 font-medium transition hover:bg-gray-50">
                  <BadgeCheck size={18} />
                  Get Certificate
                </button>
              </div>
            </div>
          </div>

          {/* Course Detail */}
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold">{coursesDetail.name}</h1>

              <p className="mt-2 text-lg text-gray-500">
                by {coursesDetail.instructor.name}
              </p>
            </div>

            <p className="max-w-5xl text-gray-700">
              {coursesDetail.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{coursesDetail.duration} hours</span>
              </div>

              <div className="flex items-center gap-2">
                <Users size={18} />
                <span>{coursesDetail.students} students</span>
              </div>

              <div className="flex items-center gap-2">
                <Star size={18} className="fill-yellow-400 text-yellow-400" />
                <span>{coursesDetail.rating}</span>
              </div>

              <LevelCategory level={coursesDetail.levelType} />
            </div>

            {/* Progress */}
            {!!coursesDetail.enrollments[0] && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-medium">Course Progress</p>
                  <p className="font-medium">11/24 lessons</p>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                  <div 
                    className="h-full bg-black" 
                    style={{
                      width: `${coursesDetail.enrollments[0].progressPercentage}%`,
                    }}
                  />
                </div>

                <p className="text-sm text-gray-500">{coursesDetail.enrollments[0].progressPercentage}% complete</p>
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="rounded-2xl bg-gray-100 p-1">
            <div className="grid grid-cols-3 gap-1">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`rounded-xl py-3 font-medium transition ${
                  activeTab === "curriculum"
                    ? "bg-white shadow-sm"
                    : "hover:bg-gray-200"
                }`}
              >
                Curriculum
              </button>

              <button
                onClick={() => setActiveTab("assignments")}
                className={`rounded-xl py-3 font-medium transition ${
                  activeTab === "assignments"
                    ? "bg-white shadow-sm"
                    : "hover:bg-gray-200"
                }`}
              >
                Assignments
              </button>

              <button
                onClick={() => setActiveTab("reviews")}
                className={`rounded-xl py-3 font-medium transition ${
                  activeTab === "reviews"
                    ? "bg-white shadow-sm"
                    : "hover:bg-gray-200"
                }`}
              >
                Reviews
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="rounded-2xl border bg-white p-6">
            {/* Curriculum */}
            {activeTab === "curriculum" && (
              <CurriculumsTab 
                curriculumns={coursesDetail.curriculumns} 
                isInstructor={isInstructor}
                changedTimes={changedTimes}
                setChangedTimes={setChangedTimes}
              />
            )}

            {/* Assignments */}
            {activeTab === "assignments" && (
              <AssignmentsTab assignments={assignments}/>
            )}

            {/* Reviews */}
            {activeTab === "reviews" && (
              <ReviewsTab reviews={coursesDetail.reviews}/>
            )}
          </div>
        </div>
      )}
    </>
  );
}
