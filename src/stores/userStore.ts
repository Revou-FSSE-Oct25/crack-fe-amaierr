import { User } from "@/interfaces/user"
import { create } from "zustand"

type UserState = {
    user: User
    updateUserDetail: (newData: User) => void
}

export const useUserStore = create<UserState>((set, get) => ({
    user: {name: '', email: '', role: ''},
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


    }
}))