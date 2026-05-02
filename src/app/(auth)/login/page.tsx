"use client";

import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupLink } from "@/lib/constant";
import { redirect, useSearchParams } from "next/navigation";
import { loginAction } from "./action";
import { LoginData } from "@/lib/auth";

export default function loginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: LoginData) => {
    startTransition(async () => {
      const result = await loginAction(data);
      if (!result.success) {
        setError("root", {
          type: "manual",
          message: result.message,
        });
        return;
      }
      redirect(callbackUrl);
    });
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl bg-zinc-200 p-8 shadow-2xl">
        <h1 className="text-2xl font-semibold text-zinc-800 mb-8">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* EMAIL */}
          <div className="relative">
            <input
              type="text"
              placeholder=" "
              {...register("email")}
              className={`peer w-full rounded-lg bg-zinc-300 border px-4 pt-6 pb-2 text-black outline-none transition 
                            ${
                              errors.email
                                ? "border-red-500"
                                : "border-zinc-200 focus:border-zinc-700"
                            }
                        `}
            />
            <label className="absolute left-4 top-2 text-sm text-zinc-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-zinc-600">
              Email
            </label>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <input
              type="password"
              placeholder=" "
              {...register("password")}
              className={`peer w-full rounded-lg bg-zinc-300 border px-4 pt-6 pb-2 text-black outline-none transition
                            ${
                              errors.password
                                ? "border-red-500"
                                : "border-zinc-200 focus:border-zinc-700"
                            }
                        `}
            />
            <label className="absolute left-4 top-2 text-sm text-zinc-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-zinc-600">
              Password
            </label>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-lg bg-zinc-900 py-3 font-semibold text-white transition hover:bg-zinc-700 active:scale-[0.98]"
          >
            {isPending ? "Logging In..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-sm text-zinc-800 text-center">
          Don’t have an account?{" "}
          <Link href={signupLink} className="text-zinc-500 hover:underline">
            Sign up
          </Link>
        </p>

        {errors.root && (
          <p className="text-sm text-red-500 text-center">
            {errors.root.message}
          </p>
        )}
      </div>
    </div>
  );
}
