import { z } from "zod/v4";
import { User } from "../../../model";
import { WithMongoId } from "../../../model/WithMongoId.model";
import { getUsersCollection } from "./getUsersCollection";

export async function getUsers(): Promise<(WithMongoId & User)[]> {
    const col = await getUsersCollection();
    const users = z.array(z.object({
        ...WithMongoId.shape,
        ...User.shape
    })).parse(await col.find().toArray());
    return users;
}