import { User } from "@/interfaces/user"
import { create } from "zustand"

type UserState = {
    user: User
    isInstructor: boolean
    updateUserDetail: (newData: User) => void
    clearUserDetail: () => void
}

export const useUserStore = create<UserState>((set, get) => ({
    user: {name: '', email: '', role: ''},
    isInstructor: false,
    updateUserDetail: (newData: User) => {
        const { user } = get()

        if(!user.role){
            set({user: newData})
        } else{
            set({user: {
                name: newData.name,
                email: newData.email,
                role: user.role
            }})
        }
        if(user.role === "Instructor"){
            set({isInstructor: true})
        }
    },
    clearUserDetail: () => {
        set(
            {user: {name: '', email: '', role: ''},
            isInstructor: false
        })
    }
}))