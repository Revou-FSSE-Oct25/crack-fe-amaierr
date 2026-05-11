'use server'

import axios from "axios"
import { User } from "@/interfaces/user"
import { SettingsFormData } from "@/app/(menu)/settings/settingsSchema"
import { getAuthToken } from "./auth"
import { Course } from "@/interfaces/course"
import { MenuItem } from "@/interfaces/menuItem"
import { CourseFormData } from "@/app/(menu)/create-course/createCourseSchema"
import { Category } from "@/interfaces/category"
import { SignUpData } from "@/interfaces/signUpData"
import { LoginData } from "@/interfaces/loginData"
import { Auth } from "@/interfaces/auth"

const root = process.env.API_URL

export async function LoginAPI(data: LoginData){
    return axios.post<Auth>(root + 'auth/login', data)
}

export async function SignUpAPI(data: SignUpData){
    const res = await axios.post<Auth>(root + 'auth/register', data)
    .catch((error) => {
        throw new Error(error.response.data.message)
    })
    return res.data
}

export async function GetAuthUserAPI(){
    const token = await getAuthToken()
    const res = await axios.get<User>(root + 'users', {
        headers: {
            'Authorization': `Bearer ${token.value}`
        }
    })
    return res.data
}

export async function GetMenuAuthAPI(){
    const token = await getAuthToken()
    const res = await axios.get<MenuItem[]>(root + 'auth/menus', {
        headers: {
            'Authorization': `Bearer ${token.value}`
        }
    })
    return res.data
}

export async function GetAllRoutesAPI(){
    return axios.get(root + 'menus')
}

export async function UpdateUserDetailAPI(data: SettingsFormData){
    const token = await getAuthToken()
    const res = await axios.patch<User>(root + 'users', data, {
        headers: {
            'Authorization': `Bearer ${token.value}`
        }
    })
    return res.data
}

export async function GetUnenrolledCoursesAPI(){
    const token = await getAuthToken()
    const res = await axios.get<Course[]>(root + 'courses/browse', {
        headers: {
            'Authorization': `Bearer ${token.value}`
        }
    })

    return res.data;
}

export async function GetMyCoursesAPI(){
    const token = await getAuthToken()
    const res = await axios.get<Course[]>(root + 'courses/my-courses', {
        headers: {
            'Authorization': `Bearer ${token.value}`
        }
    })

    return res.data;
}

export async function EnrollCourseAPI(courseId: string){
    const token = await getAuthToken()
    const res = await axios.post(root + `courses/enroll/${courseId}`, {}, {
        headers: {
            'Authorization': `Bearer ${token.value}`
        }
    })

    return res.data
}

export async function CreateCourseAPI(courseData: CourseFormData){ 
    const token = await getAuthToken()
    const res = await axios.post(root + 'courses', courseData, {
        headers: {
            'Authorization': `Bearer ${token.value}`
        }
    })

    return res.data
}

export async function GetAllCategoriesAPI(){
    const res = await axios.get<Category[]>(root + 'categories')
    return res.data
}

export async function GetCourseDetailAPI(courseId: string){
    const token = await getAuthToken()
    const res = await axios.get<CourseDetail>(root + `courses/course/${courseId}`, {
        headers: {
            'Authorization': `Bearer ${token.value}`
        }
    }).catch((error) => {
        throw new Error(error.response.data.message)
    })

    return res.data
}