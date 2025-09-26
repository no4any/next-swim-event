import { z } from "zod/v4";
import { User } from "../../../model";
import { WithMongoId } from "../../../model/WithMongoId.model";
import { getUsersCollection } from "./getUsersCollection";

export async function getValidUser(email: string, password: string): Promise<(WithMongoId & User) | null> {
    const col = await getUsersCollection();
    const user = await col.findOne({ email, password });
    if (user !== null) {
        return z.object({
            ...WithMongoId.shape,
            ...User.shape
        }).parse(user);
    }
    return user;
}