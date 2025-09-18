import "server-only";

import { cache } from "react";
import { CapColor } from "../../../model/CapColor.model";
import { WithMongoId } from "../../../model/WithMongoId.model";
import { getCapColorsCollection } from "./getCapColorsCollection.function";

export async function getCapColorsRaw(): Promise<(WithMongoId & CapColor)[]> {
    const collection = await getCapColorsCollection();
    return collection.find().toArray();
}

export const getCapColors = cache(getCapColorsRaw);