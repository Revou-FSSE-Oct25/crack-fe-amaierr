import { cookies } from "next/headers";
import { GetAuthUserAPI, GetMenuAuthAPI, LoginAPI } from "./API";
import { MenuItem } from "@/interfaces/menuItem";
import { User } from "@/interfaces/user";
import { LoginData } from "@/interfaces/loginData";

export const AUTH_COOKIE = 'auth_token';

export type SignUpData = {
    name: string
    role?: string // belom ada di form signup
    email: string
    password: string
}

export async function login(data: LoginData){
    var auth 
    await LoginAPI(data)
        .then((response) => (auth = response.data))
        .catch((error) => {throw new Error(error.response.data.message)})

    const cookieStore = await cookies();
    
    cookieStore.set(AUTH_COOKIE, auth!.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
    });

    return auth
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete(AUTH_COOKIE);
}

export async function getSession(): Promise<User> {
    const response = await GetAuthUserAPI()
    .catch((error) => {throw new Error(error.response.data.message)})
    return response.data;
}

export async function getMenuAuth(): Promise<MenuItem[]>{
    const response = await GetMenuAuthAPI()
    .catch((error) => {throw new Error(error.response.data.message)})

    return response.data;
}

export async function getAuthToken(){
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTH_COOKIE);

    if (!token) throw new Error("Missing Token");

    return token
}