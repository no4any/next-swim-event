import { auth } from "@/lib/auth/auth";
import Link from "next/link";

export default async function UserPage() {
    const user = await auth();

    return <div>
        <h1>Benutzer</h1>
        <div><Link href="/admin/user/password">Passwort ändern</Link></div>
        <div>Name: <span>{user?.email}</span></div>
        <div>Ist Admin: <span>{user?.isAdmin?"Ja":"Nein"}</span></div>
    </div>
}