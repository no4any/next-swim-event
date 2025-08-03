import { getTeamsCollection } from "./getTeamsCollection.function";

export default async function getTeams() {
    const col = await getTeamsCollection();
    return await col.find({}).toArray();
}