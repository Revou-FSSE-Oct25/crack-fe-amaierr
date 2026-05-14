import { Curriculum } from "./curriculumn"

export interface CourseDetail {
    name: string
    description: string
    duration: number
    rating: number
    students: number
    levelType: string
    instructor: {name: string}
    enrollments: {
        progressPercentage: number
    }[]
    curriculumns: Curriculum[]
    reviews: {
        rating: number
        user: {name: string}
        comment: string
    }[]
}