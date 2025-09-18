"use server"

import { sign } from "@/lib/auth/auth.function";
import { Credentials } from "@/lib/model/Credentials.model";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function loginAction({username, password}: Credentials): Promise<{error?: boolean}> {
    if(username === "admin" && password === "admin") {
        const cookieStore = await cookies();
        cookieStore.set('token', await sign({email: "admin@admin.com"}));
        redirect("/admin");
    }
    return {error: true};
}