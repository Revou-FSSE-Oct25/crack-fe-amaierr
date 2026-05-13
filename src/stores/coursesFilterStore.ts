import { create } from "zustand"

type FilterState = {
    title: string
    category: string
    level: string
    setTitleFilter: (newTitleFilter: string) => void
    setCategory: (newCategory: string) => void
    setLevel: (newLevel: string) => void
    clearFilter: () => void
}

export const useCourseFilterStore = create<FilterState>((set) => ({
    title: '',
    category: '',
    level: '',
    setTitleFilter: (newTitleFilter) => {
        set({title: newTitleFilter})
    },
    setCategory: (newCategory) => {
        set({category: newCategory})
    },
    setLevel: (newLevel) => {
        set({level: newLevel})
    },
    clearFilter: () => {
        set({title: '', category: '', level: ''})
    }
}))