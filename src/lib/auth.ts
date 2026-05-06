import { cookies } from "next/headers";
import { LoginAPI } from "./API";
import { LoginData } from "@/interfaces/loginData";
import { redirect } from "next/navigation";

export const AUTH_COOKIE = 'auth_token';

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

export async function getAuthToken(){
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTH_COOKIE);

    if (!token) redirect('/login')

    return token
}