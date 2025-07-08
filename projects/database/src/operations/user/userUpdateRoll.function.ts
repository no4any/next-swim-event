import z from "zod/v4";
import { getDB } from "../../getDB";
import { Roll } from "../../model/Roll.model";

export async function userUpdateRoll(mail: string, roll: Roll) {
    const db = await getDB();
    return await db.run(`UPDATE user SET roll = ? WHERE mail = ?`, [Roll.parse(roll), z.email().parse(mail)]);
}