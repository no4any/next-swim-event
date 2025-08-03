import { ObjectId } from "mongodb";
import { getSwimmersCollection } from "./getSwimmersCollection.function";

export default async function setTeamForSwimmer(id: ObjectId | string, teamId: ObjectId | string | undefined) {
    const col = await getSwimmersCollection();
    col.updateOne({
        _id: id instanceof ObjectId ? id : new ObjectId(id)
    }, {
        $set: {
            teamId: teamId instanceof ObjectId ? teamId.toString() : teamId
        }
    });
}