import { getTeamsCollection } from "./getTeamsCollection.function";

export default async function getTeams() {
    const col = await getTeamsCollection();
    return await col.find({}).sort({name: 1}).toArray();
}