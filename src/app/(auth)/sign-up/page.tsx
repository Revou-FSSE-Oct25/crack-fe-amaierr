'use client'

import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { SignUpFormData, signUpSchema } from './signUpSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { redirect } from 'next/navigation'
import { SignUpAPI } from '@/lib/API'
import { dashboardLink, loginLink } from '@/lib/constant'

type SignupForm = {
  name: string
  role: string
  email: string
  password: string
  confirmPassword: string
}

function SignupPage() {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema)
  })

  const onSubmit = (data: SignupForm) => {
    startTransition(async () => {
      let res
      try{
        res = await SignUpAPI(data)
      } catch (error: any){
        setError('root', {
          type: 'manual',
          message: error.message,
        })
        return
      }
      redirect(loginLink)
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl bg-zinc-200 p-8 shadow-2xl">
        <h1 className="text-2xl font-semibold text-zinc-800 mb-8">
          Create Account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* NAME */}
          <div className="relative">
            <input
              type="text"
              placeholder=" "
              {...register('name')}
              className={`peer w-full rounded-lg bg-zinc-300 border px-4 pt-6 pb-2 text-black outline-none transition
                ${errors.name
                  ? 'border-red-500'
                  : 'border-zinc-200 focus:border-zinc-700'}
              `}
            />
            <label className="absolute left-4 top-2 text-sm text-zinc-500 transition-all
              peer-placeholder-shown:top-4
              peer-placeholder-shown:text-base
              peer-focus:top-2
              peer-focus:text-sm
              peer-focus:text-zinc-600">
              Name
            </label>
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="relative">
            <select
              {...register("role")}
              className="peer w-full rounded-lg bg-zinc-300 border px-3 pt-7 pb-2 text-black outline-none" 
              defaultValue=""
            >
              <option value="" disabled>
                Select a Role
              </option>
              <option value="de977148-95d3-4394-91b9-87a3f3594e77">Student</option>
              <option value="1fe8b0f8-fbf6-4a12-8ce2-2f67215b8b18">Instructor</option>
            </select>
            <label className="absolute left-4 top-2 text-sm text-zinc-500">
              Role
            </label>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">
                {errors.role.message}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div className="relative">
            <input
              type="email"
              placeholder=" "
              {...register('email')}
              className={`peer w-full rounded-lg bg-zinc-300 border px-4 pt-6 pb-2 text-black outline-none transition
                ${errors.email
                  ? 'border-red-500'
                  : 'border-zinc-200 focus:border-zinc-700'}
              `}
            />
            <label className="absolute left-4 top-2 text-sm text-zinc-500 transition-all
              peer-placeholder-shown:top-4
              peer-placeholder-shown:text-base
              peer-focus:top-2
              peer-focus:text-sm
              peer-focus:text-zinc-600">
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
              {...register('password')}
              className={`peer w-full rounded-lg bg-zinc-300 border px-4 pt-6 pb-2 text-black outline-none transition
                ${errors.password
                  ? 'border-red-500'
                  : 'border-zinc-200 focus:border-zinc-700'}
              `}
            />
            <label className="absolute left-4 top-2 text-sm text-zinc-500 transition-all
              peer-placeholder-shown:top-4
              peer-placeholder-shown:text-base
              peer-focus:top-2
              peer-focus:text-sm
              peer-focus:text-zinc-600">
              Password
            </label>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="relative">
            <input
              type="password"
              placeholder=" "
              {...register('confirmPassword')}
              className={`peer w-full rounded-lg bg-zinc-300 border px-4 pt-6 pb-2 text-black outline-none transition
                ${errors.confirmPassword
                  ? 'border-red-500'
                  : 'border-zinc-200 focus:border-zinc-700'}
              `}
            />
            <label className="absolute left-4 top-2 text-sm text-zinc-500 transition-all
              peer-placeholder-shown:top-4
              peer-placeholder-shown:text-base
              peer-focus:top-2
              peer-focus:text-sm
              peer-focus:text-zinc-600">
              Confirm Password
            </label>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-lg bg-zinc-900 py-3 font-semibold text-white transition hover:bg-zinc-700 active:scale-[0.98]"
          >
            {isPending ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-6 text-sm text-zinc-800 text-center">
          Already have an account?{' '}
          <Link href={loginLink} className="text-zinc-500 hover:underline">
            Login
          </Link>
        </p>

        {errors.root && (
          <p className="text-sm text-red-500 text-center">
            {errors.root.message}
          </p>
        )}
      </div>
    </div>
  )
}

export default SignupPage