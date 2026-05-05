'use server'

import axios from "axios"
import { User } from "@/interfaces/user"
import { Auth } from "@/interfaces/Auth"
import { LoginData } from "@/interfaces/LoginData"
import { SettingsFormData } from "@/app/(menu)/settings/settingsSchema"
import { getAuthToken } from "./auth"

const root = 'http://localhost:3010/'

export async function LoginAPI(data: LoginData){
    return axios.post<Auth>(root + 'auth/login', data)
}

export async function SignUpAPI(data: LoginData){
    return axios.post<Auth>('https://api.escuelajs.co/api/v1/auth/signUp', data)
}

export async function GetAuthUserAPI(){
    const token = await getAuthToken()
    return axios.get<User>(root + 'users', {
        headers: {
            'Authorization': `Bearer ${token.value}`
        }
    })
}

export async function GetMenuAuthAPI(){
    const token = await getAuthToken()
    return axios.get(root + 'auth/menus', {
        headers: {
            'Authorization': `Bearer ${token.value}`
        }
    })
}

export async function GetAllRoutesAPI(){
    return axios.get(root + 'menus')
}

export async function UpdateUserDetail(data: SettingsFormData){
    const token = await getAuthToken()
    return axios.patch<User>(root + 'users', data, {
        headers: {
            'Authorization': `Bearer ${token.value}`
        }
    })
}