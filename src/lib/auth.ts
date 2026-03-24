import axios from "axios";
import { cookies } from "next/headers";

export const AUTH_COOKIE = 'auth_token';

interface Auth {
    access_token: string
    refresh_token: string
}

type LoginData = {
    email: string
    password: string
}

type SignUpData = {
    name: string
    role: string
    email: string
    password: string
}

export async function login(data: LoginData){
    var auth 
    await axios.post<Auth>('https://api.escuelajs.co/api/v1/auth/login', data)
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

// Atau masukin ke sign up page, nanti diredirect ke login page lagi, gausah masukin auth dlu pas signup
export async function signUp(data: SignUpData){
    var auth 
    // Ganti APInya
    await axios.post<Auth>('https://api.escuelajs.co/api/v1/auth/login', data)
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