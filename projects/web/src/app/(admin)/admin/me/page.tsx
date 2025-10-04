import { auth } from "@/lib/auth/auth";
import Link from "next/link";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function UserPage() {
    const user = await auth();

    return <div>
        <h1 className="mb-3">Benutzer</h1>
        <div className="mb-3"><Link className="p-2 mt-2 mr-2 bg-dlrg-red rounded w-full font-bold cursor-pointer" href="/admin/me/password">Passwort ändern</Link></div>
        <div>Name: <span>{user?.email}</span></div>
        <div>Ist Admin: <span>{user?.isAdmin?"Ja":"Nein"}</span></div>
    </div>
}