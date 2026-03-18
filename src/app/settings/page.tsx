"use client"

import { useForm } from "react-hook-form"
import { SettingsFormData, settingsSchema } from "./settingsSchema"
import { zodResolver } from "@hookform/resolvers/zod"

export default function settingsPage(){
    function onSubmit() {
        console.log("Form data:")
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SettingsFormData>({
        resolver: zodResolver(settingsSchema)
    })

    return (
        <div className="p-8 space-y-8">

            {/* Header */}

            <div>
                <h1 className="text-2xl font-semibold">
                Settings
                </h1>

                <p className="text-gray-500 text-sm">
                Manage your account and preferences
                </p>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8"
            >

                {/* Profile Section */}

                <div className="border border-gray-300 rounded-xl p-6 bg-white">

                    <h2 className="font-medium mb-6">
                        Profile Information
                    </h2>

                    <div className="space-y-4">

                        {/* Name */}

                        <div>
                            <label className="text-sm font-medium">
                                Full Name
                            </label>

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
                            <label className="text-sm font-medium">
                                Email
                            </label>

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

                        <button
                            type="submit"
                            className="mt-4 bg-black text-white px-5 py-2 rounded-lg"
                        >
                            Save Changes
                        </button>

                    </div>

                </div>

            </form>

        </div>
    )
}