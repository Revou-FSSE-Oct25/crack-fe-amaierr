export interface Course{
    id: string
    name: string,
    description: string
    levelType: string
    students: string
    rating: number
    image: string // belom ada di response backend
    duration?: number // belom ada di response backend
    enrollments: {progressPercentage : number}[]
    instructor: {name : string}
  }