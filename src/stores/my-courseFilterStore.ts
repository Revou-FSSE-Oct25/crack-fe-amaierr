import { create } from "zustand"

type FilterState = {
    category: string
    level: string
    setCategory: (newCategory: string) => void
    setLevel: (newLevel: string) => void
    clearFilter: () => void
}

export const useMyCourseFilterStore = create<FilterState>((set) => ({
    category: '',
    level: '',
    setCategory: (newCategory) => {
        set({category: newCategory})
    },
    setLevel: (newLevel) => {
        set({level: newLevel})
    },
    clearFilter: () => {
        set({category: '', level: ''})
    }
}))