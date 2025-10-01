import { getUsers } from "@/lib/mongo/collections";
import UserItem from "./UserItem.component";
import Link from "next/link";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function UsersPage() {
    const users = await getUsers();

    return <div>
        <h1 className="mb-3">Users</h1>
        <div className="mb-3">
            <Link href="/admin/users/create">Benutzer hinzufügen</Link>
        </div>
        <div>
            {users.map((user, i) => <UserItem key={i} user={user} />)}
        </div>
    </div>
}