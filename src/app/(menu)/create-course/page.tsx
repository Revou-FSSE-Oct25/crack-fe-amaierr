"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CourseFormData, courseSchema } from "./createCourseSchema"

export default function CreateCoursePage() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "Web Development",
      level: "Beginner",
      price: 0
    }
  })

  function onSubmit(data: CourseFormData) {
    console.log("Course Created:", data)

    // Example API call
    /*
    fetch("/api/courses",{
      method:"POST",
      body: JSON.stringify(data)
    })
    */
  }

  return (
    <div className="p-8">

      {/* Header */}

      <div className="mb-6">

        <h1 className="text-2xl font-semibold">
          Create New Course
        </h1>

        <p className="text-gray-500 text-sm">
          Design and publish a new course for students
        </p>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border rounded-xl p-6 bg-white space-y-6"
      >

        <h2 className="font-medium">
          Course Details
        </h2>

        {/* Title */}

        <div>

          <label className="text-sm font-medium">
            Course Title
          </label>

          <input
            {...register("title")}
            placeholder="Enter course title"
            className="w-full mt-1 border rounded-lg px-3 py-2"
          />

          {errors.title && (
            <p className="text-red-500 text-sm mt-1">
              {errors.title.message}
            </p>
          )}

        </div>

        {/* Description */}

        <div>

          <label className="text-sm font-medium">
            Description
          </label>

          <textarea
            {...register("description")}
            placeholder="Describe what students will learn"
            rows={5}
            className="w-full mt-1 border rounded-lg px-3 py-2"
          />

          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}

        </div>

        {/* Category + Level */}

        <div className="grid grid-cols-2 gap-6">

          <div>

            <label className="text-sm font-medium">
              Category
            </label>

            <select
              {...register("category")}
              className="w-full mt-1 border rounded-lg px-3 py-2"
            >

              <option>Web Development</option>
              <option>Data Science</option>
              <option>Marketing</option>
              <option>Design</option>

            </select>

          </div>

          <div>

            <label className="text-sm font-medium">
              Level
            </label>

            <select
              {...register("level")}
              className="w-full mt-1 border rounded-lg px-3 py-2"
            >

              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>

            </select>

          </div>

        </div>

        {/* Submit */}

        <button
          type="submit"
          className="bg-black text-white px-5 py-2 rounded-lg"
        >
          Create Course
        </button>

      </form>

    </div>
  )
}