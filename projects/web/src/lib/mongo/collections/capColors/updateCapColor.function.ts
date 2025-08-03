import { ObjectId } from "mongodb";
import { CapColor } from "../../../model/CapColor.model";
import { WithMongoId } from "../../../model/WithMongoId.model";
import { getCapColorsCollection } from "./getCapColorsCollection.function";

export async function updateCapColor(capColor: WithMongoId & CapColor) {
    const {_id, ...rest} = capColor;
    const id = _id instanceof ObjectId? _id : new ObjectId(_id);
    const col = await getCapColorsCollection();
    return await col.updateOne({_id: id},{$set: {...rest}});
}