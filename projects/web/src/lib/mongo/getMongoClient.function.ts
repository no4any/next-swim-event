import { CONNECTION_STRING, MONGO_PASSWORD, MONGO_USERNAME } from "@/env";
import { MongoClient } from "mongodb";

var mongo: MongoClient | undefined;

export async function getMongoClient(): Promise<MongoClient> {
    if(mongo === undefined) {
        console.log("Creating MongoClient");
        mongo = await new MongoClient(CONNECTION_STRING, {
            auth: {
                username: MONGO_USERNAME,
                password: MONGO_PASSWORD
            }
        }).connect();
    }

    return mongo;
}