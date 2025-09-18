import { getUsers } from "@/lib/mongo/collections/users/getUsers.function";
import { authAdmin } from "../auth.action";

export default async function UsersPage() {
    const user = await authAdmin();
    const users = await getUsers();

    return <div>
        {JSON.stringify(users)};
    </div>
}