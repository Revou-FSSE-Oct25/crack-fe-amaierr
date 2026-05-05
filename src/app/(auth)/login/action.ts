'use server'

import { LoginData } from '@/interfaces/LoginData';
import { login as authLogin } from '@/lib/auth';
import { redirect } from 'next/navigation';


export async function loginAction(data: LoginData) {
  try {
    await authLogin(data);
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

export async function logoutAction() {
  await import('@/lib/auth').then(m => m.logout());
  redirect('/login');
}

