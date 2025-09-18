import "server-only";

import { getUsersCollection } from "./getUsersCollection";
import { UserWithPermissions } from "@/lib/model";

export async function updateUserPassword(user: UserWithPermissions) {
    const col = await getUsersCollection();
    const { email, ...rest } = UserWithPermissions.parse(user);
    return await col.updateOne({ email }, { $set: { ...rest } })
}