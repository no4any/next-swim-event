import "server-only";

import { getCollection } from "../../getCollection.function";
import { SwimCollections } from "../SwimCollection.enum";
import { UserWithPermissionsAndSecrets } from "@/lib/model";

export async function getUsersCollection() {
    const collection = await getCollection<UserWithPermissionsAndSecrets>(SwimCollections.USERS);
    await collection.createIndex({ email: 1 }, { unique: true });
    return collection;
}