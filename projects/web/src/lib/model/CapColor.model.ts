import z from "zod/v4";
import { Color } from "./Color.model";

export const CapColor = z.object({
    name: z.string(),
    color: Color
})

export type CapColor = z.infer<typeof CapColor>