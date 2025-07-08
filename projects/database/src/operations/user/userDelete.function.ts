import { getDB } from "../../getDB";

export async function userDelete(mail: string) {
    const db = await getDB();
    return await db.run(`DELETE FROM user WHERE mail=?`, [mail]);
}