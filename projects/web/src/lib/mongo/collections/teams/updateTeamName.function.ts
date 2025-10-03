import { ObjectId } from "mongodb";
import { getTeamsCollection } from "./getTeamsCollection.function";

export default async function updateTeamName(id: string | ObjectId, name: string) {
    const col = await getTeamsCollection();
    const trimName = name.trim();
    col.updateOne({
        _id: id instanceof ObjectId ? id : new ObjectId(id) 
    },{
        $set: {
            name: trimName,
            lowerName: trimName.toLowerCase()
        }
    })
}