import { getDB } from "../../getDB";
import { hash } from "../../hash.function";
import { User } from "../../model/User.model";

export async function userValidate(mail: string, password: string) {
    const db = await getDB();
    return await db.get<User>(`SELECT mail, roll FROM user WHERE mail = ? AND password = ?`, [mail, hash(password)]);
}