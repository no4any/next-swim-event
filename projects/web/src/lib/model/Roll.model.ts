import z from "zod/v4";

export const Roll = z.enum(['ADMIN', "EDITOR", "VIEWER"]);

export type Roll = z.infer<typeof Roll>