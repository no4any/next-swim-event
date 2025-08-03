import { Team } from "@/lib/model";
import { getTeamsCollection } from "./getTeamsCollection.function";

export default async function addTeam(team: Team) {
    const col = await getTeamsCollection();
    return col.insertOne(team);
}