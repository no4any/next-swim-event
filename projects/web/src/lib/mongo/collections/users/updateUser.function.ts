import { UserWithPassword } from "../../../model";
import { getUsersCollection } from "./getUsersCollection";

export async function updateUser(user: UserWithPassword) {
    const col = await getUsersCollection();
    const { email, password } = user;
    return await col.updateOne({ email }, { $set: { password } })
}