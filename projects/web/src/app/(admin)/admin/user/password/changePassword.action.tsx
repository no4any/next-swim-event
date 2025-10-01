"use server"

import { auth } from "@/lib/auth/auth";
import { updateUser } from "@/lib/mongo/collections";
import { getValidUser } from "@/lib/mongo/collections/users/getValidUser.function";
import updateUserPassword from "@/lib/mongo/collections/users/updateUserPassword.function";
import swimHash from "@/lib/swimHash.function";
import { redirect } from "next/navigation";

export default async function ChangePasswordAction(oldPassword: string, newPassword: string, newPasswordRepeat: string) {
    const user = await auth();

    if (!user) redirect("/login");

    if (newPassword === newPasswordRepeat) {
        const dbUser = await getValidUser(user.email, await swimHash(oldPassword));
        if (!dbUser) return "Altes Passwort ist falsch";
        const result = await updateUserPassword(user.email, newPassword);
        if(result.modifiedCount > 1) return "Passwort konnte nicht geändert werden";
        redirect("/admin/user");
    }

    return "Passwörter stimmen nicht überein";
}