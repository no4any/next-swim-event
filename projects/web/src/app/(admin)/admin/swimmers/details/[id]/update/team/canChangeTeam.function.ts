import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import { getTeamsCollection } from "@/lib/mongo/collections/teams/getTeamsCollection.function";

export default async function canChangeTeam(userId: string) {
    const swimmer = await getSwimmer(userId);
    if(swimmer === null) return false;

    if(swimmer.isManaged) return false;
    const teamCol = await getTeamsCollection();

    const ownedTeam = await teamCol.findOne({owner: swimmer?._id.toString()});
    if(ownedTeam !== null) return false;

    return true;
}