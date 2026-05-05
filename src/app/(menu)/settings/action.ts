'use server'

import { getSession } from "@/lib/auth";

export async function getDefaultValue() {
    return await getSession();
}