import { WithMongoId } from "@/lib/model/WithMongoId.model";
import { UserWithPassword } from "../../../model";
import { getCollection } from "../../getCollection.function";
import { SwimCollections } from "../SwimCollection.enum";

export async function getUsersCollection() {
    const collection = await getCollection<UserWithPassword & WithMongoId>(SwimCollections.USERS);
    await collection.createIndex({ email: 1 }, { unique: true });
    return collection;
}