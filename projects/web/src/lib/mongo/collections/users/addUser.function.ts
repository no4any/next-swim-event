import "server-only";

import { getUsersCollection } from "./getUsersCollection";
import { UserWithPermissionsAndSecrets } from "@/lib/model";
import swimHash from "@/lib/swimHash.function";

export async function addUser(user: UserWithPermissionsAndSecrets) {
    const col = await getUsersCollection();
    user.password = await swimHash(user.password);
    return col.insertOne(user);
}