"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Clock,
  Download,
  MessageSquare,
  Play,
  Star,
  Users,
  BadgeCheck,
  CircleCheck,
} from "lucide-react";

type Lesson = {
  id: number;
  title: string;
  duration: string;
  completed?: boolean;
};

type Section = {
  id: number;
  title: string;
  lessons: Lesson[];
};

type Assignment = {
  id: number;
  title: string;
  dueDate: string;
  points: number;
  status: "pending" | "submitted";
  grade?: string;
};

type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
};

const curriculumData: Section[] = [
  {
    id: 1,
    title: "HTML Fundamentals",
    lessons: [
      {
        id: 1,
        title: "Introduction to HTML",
        duration: "15 min",
        completed: true,
      },
      {
        id: 2,
        title: "HTML Structure and Tags",
        duration: "20 min",
        completed: true,
      },
      {
        id: 3,
        title: "Forms and Input Elements",
        duration: "25 min",
      },
      {
        id: 4,
        title: "HTML Quiz",
        duration: "10 min",
      },
    ],
  },
  {
    id: 2,
    title: "CSS Styling",
    lessons: [],
  },
  {
    id: 3,
    title: "JavaScript Fundamentals",
    lessons: [],
  },
];

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

const reviews: Review[] = [
  {
    id: 1,
    name: "Alex Thompson",
    rating: 5,
    comment:
      "Excellent course! The instructor explains everything clearly and the projects are very practical.",
  },
  {
    id: 2,
    name: "Maria Garcia",
    rating: 4,
    comment:
      "Great content and well-structured lessons. Helped me land my first web development job!",
  },
];

export default function CourseDetailPage() {
  const [activeTab, setActiveTab] = useState<
    "curriculum" | "assignments" | "reviews"
  >("curriculum");

  const [openSection, setOpenSection] = useState<number | null>(1);

  function toggleSection(id: number) {
    setOpenSection((prev) => (prev === id ? null : id));
  }

  return (
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

          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <button className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium shadow-lg transition hover:scale-105">
              <Play size={18} />
              Continue Learning
            </button>
          </div>
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
          <h1 className="text-4xl font-bold">
            Complete Web Development Bootcamp
          </h1>

          <p className="mt-2 text-lg text-gray-500">by Sarah Johnson</p>
        </div>

        <p className="max-w-5xl text-gray-700">
          Learn modern web development from scratch with HTML, CSS, JavaScript,
          React, and Node.js. Build real-world projects and deploy them to the
          cloud.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-6 text-gray-500">
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>40 hours</span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={18} />
            <span>12,456 students</span>
          </div>

          <div className="flex items-center gap-2">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />
            <span>4.8</span>
          </div>

          <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700">
            Intermediate
          </span>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="font-medium">Course Progress</p>
            <p className="font-medium">11/24 lessons</p>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-[45%] bg-black" />
          </div>

          <p className="text-sm text-gray-500">45% complete</p>
        </div>
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
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Course Content</h2>

            {curriculumData.map((section) => (
              <div key={section.id} className="border-b pb-4 last:border-none">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex w-full items-center justify-between py-3 text-left"
                >
                  <h3 className="text-xl font-semibold">{section.title}</h3>

                  {openSection === section.id ? <ChevronUp /> : <ChevronDown />}
                </button>

                {openSection === section.id && (
                  <div className="space-y-3 pt-4">
                    {section.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between rounded-xl border p-4"
                      >
                        <div className="flex items-center gap-4">
                          {lesson.completed ? (
                            <CircleCheck className="text-green-500" />
                          ) : (
                            <Play />
                          )}

                          <div>
                            <p className="font-medium">{lesson.title}</p>

                            <p className="text-sm text-gray-500">
                              {lesson.duration}
                            </p>
                          </div>
                        </div>

                        <button className="font-medium">
                          {lesson.completed ? "Review" : "Start"}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Assignments */}
        {activeTab === "assignments" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Course Assignments</h2>

            {assignments.map((assignment) => (
              <div key={assignment.id} className="rounded-2xl border p-6">
                <div className="flex flex-col justify-between gap-6 md:flex-row">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold">
                        {assignment.title}
                      </h3>

                      <p className="mt-2 text-gray-500">
                        Due: {assignment.dueDate}
                      </p>
                    </div>

                    {assignment.grade && (
                      <p className="font-semibold">Grade: {assignment.grade}</p>
                    )}

                    <button className="rounded-xl border px-5 py-3 font-medium transition hover:bg-gray-50">
                      {assignment.status === "pending"
                        ? "Submit Assignment"
                        : "View Submission"}
                    </button>
                  </div>

                  <div className="text-right">
                    <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium capitalize">
                      {assignment.status}
                    </span>

                    <p className="mt-4 text-lg text-gray-500">
                      {assignment.points} points
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reviews */}
        {activeTab === "reviews" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Student Reviews</h2>

            {reviews.map((review) => (
              <div key={review.id} className="rounded-2xl border p-6">
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <h3 className="text-xl font-semibold">{review.name}</h3>

                <p className="mt-3 text-gray-600">"{review.comment}"</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
