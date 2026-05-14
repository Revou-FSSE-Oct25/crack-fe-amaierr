export interface SubCurriculumn {
    id: string
    name: string
    duration: string
    materialLink: string
    progresses: {
        isDone: boolean
    }[]
}