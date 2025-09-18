import "server-only";

import { Document } from "mongodb";
import { getDb } from "./getDb.function";
import { SwimCollection } from "./collections/SwimCollection.enum";

export async function getCollection<T extends Document>(name: SwimCollection) {
    const db = getDb();
    return (await db).collection<T>(name);
}