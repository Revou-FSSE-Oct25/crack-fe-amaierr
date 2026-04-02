import { cookies } from "next/headers";
import { GetSessionAPI, LoginAPI } from "./API";

export const AUTH_COOKIE = 'auth_token';

export interface Auth {
    access_token: string
    refresh_token: string
}

export interface User {
  name: string
  email: string
  role: string
  avatar: string
}

export type LoginData = {
    email: string
    password: string
}

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

export async function getSession(): Promise<User | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTH_COOKIE);

    if (!token) return null;

    try {
        const response = await GetSessionAPI(token.value)
        return response.data;
    } catch {
        return null;
    }
  
}