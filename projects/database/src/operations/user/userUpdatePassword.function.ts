import { getDB } from "../../getDB";
import { hash } from "../../hash.function";

export async function userUpdatePassword(mail: string, password: string) {
    const db = await getDB();
    return await db.run(`UPDATE user SET password = ? WHERE mail = ?`, [hash(password), mail]);
}