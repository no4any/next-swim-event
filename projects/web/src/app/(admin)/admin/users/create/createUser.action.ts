"use server"

import { auth } from "@/lib/auth/auth"
import { addUser } from "@/lib/mongo/collections";
import swimHash from "@/lib/swimHash.function";
import { redirect } from "next/navigation";

export default async function createUserAction(email: string, password: string, isAdmin: boolean) {
    const user = await auth();

    if (user?.isAdmin) {
        try {
            const result = await addUser({ email: email.toLowerCase(), password: await swimHash(password), isAdmin });
        } catch(e) {
            console.warn(e);
            return "Fehler beim Anlegen des Benutzers";
        }
        redirect("/admin/users");
    }

    return "Fehlende Rechte"
}