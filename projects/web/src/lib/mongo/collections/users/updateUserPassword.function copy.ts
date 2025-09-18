import "server-only";

import { getUsersCollection } from "./getUsersCollection";
import { UserWithPermissionsAndSecrets } from "@/lib/model";

export async function updateUserPassword(user: UserWithPermissionsAndSecrets) {
    const col = await getUsersCollection();
    const { email, password } = user;
    return await col.updateOne({ email }, { $set: { password } })
}