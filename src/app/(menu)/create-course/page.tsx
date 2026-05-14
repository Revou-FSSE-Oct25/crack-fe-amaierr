"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CourseFormData, courseSchema } from "./createCourseSchema";
import { CreateCourseAPI, GetAllCategoriesAPI } from "@/lib/API";
import { useEffect, useState } from "react";
import { Category } from "@/interfaces/category";

export default function CreateCoursePage() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchData() {
      const categoriesRes = await GetAllCategoriesAPI();
      setCategories(categoriesRes);
    }

    fetchData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
  });

  async function onSubmit(data: CourseFormData) {
    const res = await CreateCourseAPI(data);
  }

  return (
    <div className="p-8">
      {/* Header */}

      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Create New Course</h1>

        <p className="text-gray-500 text-sm">
          Design and publish a new course for students
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border rounded-xl p-6 bg-white space-y-6"
      >
        <h2 className="font-medium">Course Details</h2>

        {/* Title */}

        <div>
          <label className="text-sm font-medium">Course Title</label>

          <input
            {...register("title")}
            placeholder="Enter course title"
            className="w-full mt-1 border rounded-lg px-3 py-2"
          />

          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}

        <div>
          <label className="text-sm font-medium">Description</label>

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
            <label className="text-sm font-medium">Category</label>

            <select
              {...register("categoryId")}
              className="w-full mt-1 border rounded-lg px-3 py-2"
              defaultValue=""
            >
              <option value="" disabled>
                Select a Category
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {errors.categoryId && (
              <p className="text-red-500 text-sm mt-1">
                {errors.categoryId.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Level</label>

            <select
              {...register("level")}
              className="w-full mt-1 border rounded-lg px-3 py-2"
              defaultValue=""
            >
              <option value="" disabled>
                Select Level
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            {errors.level && (
              <p className="text-red-500 text-sm mt-1">
                {errors.level.message}
              </p>
            )}
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
  );
}
