import { Db } from "mongodb";
import { getMongoClient } from "./getMongoClient.function";

export async function getDb(name: string = "swim"): Promise<Db> {
    const mongo = await getMongoClient();
    return mongo.db(name);
}