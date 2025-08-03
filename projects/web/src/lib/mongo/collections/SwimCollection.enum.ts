export const SwimCollections = {
    CAP_COLORS: "cap_colors",
    SWIMMERS: "swimmers",
    USERS: "users",
    TEAMS: "teams"
} as const;

export type SwimCollection = typeof SwimCollections[keyof typeof SwimCollections];