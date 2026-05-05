import axios from "axios"
import { User } from "@/interfaces/user"
import { Auth } from "@/interfaces/Auth"
import { LoginData } from "@/interfaces/LoginData"

const root = 'http://localhost:3010/'

export function LoginAPI(data: LoginData){
    return axios.post<Auth>(root + 'auth/login', data)
}

export function SignUpAPI(data: LoginData){
    return axios.post<Auth>('https://api.escuelajs.co/api/v1/auth/signUp', data)
}

export function GetAuthUserAPI(token: string){
    return axios.get<User>(root + 'users', {
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

export function GetAllRoutesAPI(){
    return axios.get(root + 'menus')
}