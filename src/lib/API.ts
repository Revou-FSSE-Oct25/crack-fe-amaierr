import axios from "axios"
import { Auth, LoginData, User } from "./auth"

const root = 'http://localhost:3010/'

export function LoginAPI(data: LoginData){
    return axios.post<Auth>(root + 'auth/login', data)
}

export function SignUpAPI(data: LoginData){
    return axios.post<Auth>('https://api.escuelajs.co/api/v1/auth/signUp', data)
}

export function GetSessionAPI(token: string){
    return axios.get<User>('https://api.escuelajs.co/api/v1/auth/profile', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export function GetMenuAuthAPI(token: string){
    return axios.get(root + 'auth/menus', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}