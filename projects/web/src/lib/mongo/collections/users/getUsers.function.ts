import "server-only";

import z from "zod/v4";
import { User, UserWithPermissions } from "../../../model";
import { getUsersCollection } from "./getUsersCollection";
import { cache } from "react";

export async function getUsersRaw(): Promise<User[]> {
    const col = await getUsersCollection();
    const users = z.array(UserWithPermissions).parse(await col.find().toArray());
    return users;
}

export const getUsers = cache(getUsersRaw)