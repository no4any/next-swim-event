import z from "zod/v4";

export const User = z.object({
    email: z.email(),
})

export const UserWithPermissions = z.object({
    ...User.shape,
    isAdmin: z.boolean().nullish(),
    isRegistration: z.boolean().nullish(),
    isLogger: z.boolean().nullish()
})

export const UserWithPermissionsAndSecrets = z.object({
    ...UserWithPermissions.shape,
    password: z.string(),
    resetToken: z.string().nullish()
})

export type User = z.infer<typeof User>
export type UserWithPermissions = z.infer<typeof UserWithPermissions>
export type UserWithPermissionsAndSecrets = z.infer<typeof UserWithPermissionsAndSecrets>