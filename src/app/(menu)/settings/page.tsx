"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { SettingsFormData, settingsSchema } from "./settingsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateUserDetailAPI } from "@/lib/API";
import { useUserStore } from "@/stores/userStore";
import { logoutAction } from "@/app/(auth)/login/action";

export default function settingsPage() {
  const { user, updateUserDetail } = useUserStore();

  const onSubmit: SubmitHandler<SettingsFormData> = async (data) => {
    const res = await UpdateUserDetailAPI(data);
    updateUserDetail(res);
  };

  const handleLogout = async () => {
    await logoutAction();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsFormData>({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
    resolver: zodResolver(settingsSchema),
  });

  return (
    <div className="p-8 space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>

        <p className="text-gray-500 text-sm">
          Manage your account and preferences
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Profile Section */}

        <div className="border border-gray-300 rounded-xl p-6 bg-white">
          <h2 className="font-medium mb-6">Profile Information</h2>

          <div className="space-y-4">
            {/* Name */}

            <div>
              <label className="text-sm font-medium">Full Name</label>

              <input
                {...register("name")}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}

            <div>
              <label className="text-sm font-medium">Email</label>

              <input
                {...register("email")}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mt-5 text-white space-x-2">
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-gray-950 hover:bg-gray-700 shadow-lg shadow-gray-700/20"
              >
                Save Changes
              </button>

              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-lg bg-red-700 hover:bg-red-600 shadow-lg shadow-red-700/20 "
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
