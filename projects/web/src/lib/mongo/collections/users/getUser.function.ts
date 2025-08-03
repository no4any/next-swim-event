import { z } from "zod/v4";
import { User } from "../../../model";
import { WithMongoId } from "../../../model/WithMongoId.model";
import { getUsersCollection } from "./getUsersCollection";

export async function getUser(email: string): Promise<(WithMongoId & User) | null> {
    const col = await getUsersCollection();
    const users = z.object({
        ...WithMongoId.shape,
        ...User.shape
    }).parse(await col.findOne({ email }));
    return users;
}