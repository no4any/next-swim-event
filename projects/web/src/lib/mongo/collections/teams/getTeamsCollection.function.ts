import { Team } from "../../../model";
import { getCollection } from "../../getCollection.function";
import { SwimCollections } from "../SwimCollection.enum";

export async function getTeamsCollection() {
    const collection = await getCollection<Team>(SwimCollections.TEAMS);
    await collection.createIndex({ lowerName: 1 }, { unique: true });
    return collection;
}