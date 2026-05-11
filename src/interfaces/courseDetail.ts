interface CourseDetail {
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
    curriculumns: {
        id: string
        name: string
        subCurriculums: {
            id: string
            name: string
            duration: string
            materialLink: string
            progresses: {
                isDone: boolean
            }[]
        }[]
    }[]
    reviews: {
        rating: number
        user: {name: string}
        comment: string
    }[]
}