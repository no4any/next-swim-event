import "server-only";

import { getUsersCollection } from "./getUsersCollection";

export async function deleteUser(email: string) {
    const col = await getUsersCollection();
    return col.deleteOne({ email });
}