import { getDB } from "../../getDB";
import { User } from "../../model/User.model";

export async function userAll() {
    const db = await getDB();
    return await db.all<User>(`SELECT mail, roll FROM user`);
}