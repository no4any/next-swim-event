import swimHash from "@/lib/swimHash.function";
import { getUsersCollection } from "./getUsersCollection";

export default async function updateUserPassword(email: string, newPassword: string) {
    const col = await getUsersCollection();
    return await col.updateOne({ email }, { $set: { password: await swimHash(newPassword) } })
}