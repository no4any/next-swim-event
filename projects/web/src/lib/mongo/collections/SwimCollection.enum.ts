export const SwimCollections = {
    CAP_COLORS: "cap_colors",
    SWIMMERS: "swimmers",
    USERS: "users",
    TEAMS: "teams",
    LAPS: "laps",
    COUNTERS: "counters"
} as const;

export type SwimCollection = typeof SwimCollections[keyof typeof SwimCollections];