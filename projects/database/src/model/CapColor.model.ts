import z from "zod/v4";
import { Color } from "./Color.model";

export const CapColor = z.object({
    id: z.number().int(),
    name: z.string(),
    color: Color
})

export type CapColor = z.infer<typeof CapColor>