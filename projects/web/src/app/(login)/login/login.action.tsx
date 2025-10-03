"use server"

import { login } from "@/lib/auth/auth";
import { redirect } from "next/navigation"

export default async function LoginAction(email: string, password: string) {
    const token = await login(email, password);

    if(token) {
        redirect("/admin")
    }

    throw new Error("Anmelden fehlgeschlagen");
}