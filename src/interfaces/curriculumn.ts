import { SubCurriculumn } from "./subCurriculumn"

export interface Curriculum{
    id: string
    name: string
    subCurriculums: SubCurriculumn[]
}