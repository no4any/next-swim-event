import "server-only";

import { cache } from "react";
import { UserWithPermissions } from "../../../model";
import { getUsersCollection } from "./getUsersCollection";

export async function getUserRaw(email: string): Promise<UserWithPermissions | null> {
    const col = await getUsersCollection();
    const user = await col.findOne({ email });

    if (user === null) {
        return null;
    }

    return UserWithPermissions.parse(user);
}

export const getUser = cache(getUserRaw)