import { auth } from "@/lib/auth/auth";

export default async function UserPage() {
    const user = await auth();

    return <div>
        <h1>Benutzer</h1>
        <div>Name: <span>{user?.email}</span></div>
        <div>Ist Admin: <span>{user?.isAdmin?"Ja":"Nein"}</span></div>
    </div>
}