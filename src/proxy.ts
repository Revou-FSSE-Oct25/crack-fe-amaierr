import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, getMenuAuth } from "./lib/auth";
import { GetAllRoutesAPI, GetAuthUserAPI } from "./lib/API";
import { User } from "./interfaces/user";

const ROUTES = await GetAllRoutesAPI()

export async function proxy(request: NextRequest){
    const pathname = request.nextUrl.pathname

    // Check if user is authenticated
    const authCookie = request.cookies.get(AUTH_COOKIE);
    let user: User | null = null
    
    if (authCookie) {
        try {
            const response = await GetAuthUserAPI()
            user = response.data
        } catch {
            // Invalid cookie
        }
    }
    
    const isLoggedIn = !!user
    
    if (isLoggedIn && (pathname === '/login' || pathname === '/sign-up')) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    
    // Check for protected routes
    const routeKey = ROUTES.data.find((route: any) => 
        pathname.startsWith(`/${route.path}`)
    )

    if (routeKey) {
        // If not logged in, redirect to login
        if (!isLoggedIn) {
            const url = new URL('/login', request.url)
            url.searchParams.set('callbackUrl', pathname)
            return NextResponse.redirect(url)
        }
        
        // Role-based access control
        const menuAuths = await getMenuAuth()
        
        let authorized = false
        authorized = menuAuths.some(menuAuth => {
            return pathname.startsWith(`/${menuAuth.menu.path}`)
        })
        
        if (!authorized) {
            // User is logged in but doesn't have permission
            return NextResponse.redirect(new URL('/access-denied', request.url))
        }
    }

    return NextResponse.next()
}