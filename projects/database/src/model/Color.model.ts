import z from "zod/v4";

export const Color = z.regex(/^#[0-9A-F]{6}$/);

export type Color = z.infer<typeof Color>