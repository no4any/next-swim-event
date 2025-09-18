"use server"

import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verify } from "@/lib/auth/auth.function";
import { getUser } from "@/lib/mongo/collections/users/getUser.function";

const ROOT_USER = process.env.ROOT_USER || "admin@admin.com";

export default async function authAction() {
    const cookieStore = await cookies();
    const plainToken = cookieStore.get("token")?.value;

    if (plainToken === undefined) {
        redirect("/login");
    }
    
    try {

        const token = await verify(plainToken);
        const user = await getUser(token.email);

        if (user) {
            return user;
        }
    } catch (e) {
        console.error(e);
    }

    cookieStore.delete("token");
    redirect("/login");
}

export async function authAdmin() {
    const user = await authAction();

    if (user.email !== ROOT_USER) {
        if (!user.isAdmin) {
            redirect("/admin");
        }
    }

    return user;
}

export async function authRegistration() {
    const user = await authAction();

    if (user.email !== ROOT_USER) {
        if (!user.isRegistration) {
            redirect("/admin");
        }
    }

    return user;
}

export async function authLogger() {
    const user = await authAction();

    if (user.email !== ROOT_USER) {
        if (!user.isLogger) {
            redirect("/admin");
        }
    }

    return user;
}