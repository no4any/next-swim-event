import { getDB } from "../../getDB";
import { User } from "../../model/User.model";

export async function userGet(mail: string) {
    const db = await getDB();
    return await db.get<User>(`SELECT mail, roll FROM user WHERE mail = ?`, [mail]);
}