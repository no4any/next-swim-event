import { MongoClient } from "mongodb";

const CONNECTION_STRING = process.env.CONNECTION_STRING || 'mongodb://localhost:27017';

const MONGO_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME || 'root';
const MONGO_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD || 'root';

var mongo: MongoClient | undefined;

export async function getMongoClient(): Promise<MongoClient> {
    console.log("Connection to", CONNECTION_STRING);
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