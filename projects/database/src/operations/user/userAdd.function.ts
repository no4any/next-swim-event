import { getDB } from "../../getDB";
import { hash } from "../../hash.function";
import { User } from "../../model/User.model";

export async function userAdd(user: User) {
    const db = await getDB();
    return await db.run(`INSERT INTO user (mail, password, roll) VALUES (?,?,?)`, [user.mail, hash(user.password || ""), user.roll]);
}