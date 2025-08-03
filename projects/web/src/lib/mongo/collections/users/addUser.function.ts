import { UserWithPassword } from "../../../model";
import { getUsersCollection } from "./getUsersCollection";

export async function addUser(user: UserWithPassword) {
    const col = await getUsersCollection();
    return col.insertOne(user);
}