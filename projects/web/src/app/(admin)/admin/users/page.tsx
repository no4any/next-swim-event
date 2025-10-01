import { getUsers } from "@/lib/mongo/collections";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function UsersPage() {
    const users = await getUsers();

    return <div>
        <h1>Users</h1>
        <div>{JSON.stringify(users)}</div>
    </div>
}