"use server"

import { Team } from "./model";
import { getLapsForTeamId } from "./mongo/collections/laps/getLapsForTeamId.function";
import { getSwimmersInTeam } from "./mongo/collections/swimmers/getSwimmersInTeam.function";
import getTeams from "./mongo/collections/teams/getTeams.function";

export default async function getTeamWithResultsAction(): Promise<(Team & { total: number, average: number, swimmerCount: number })[]> {
    const teams = await getTeams();

    const result = await Promise.all(teams.map(async (team) => {
        const swimmerCount = (await getSwimmersInTeam(team._id?.toString() || "")).filter(member => member.isRegistered).length;
        const total = await getLapsForTeamId(team._id?.toString() || "");

        return {
            ...team,
            total,
            swimmerCount,
            average: Math.floor(total / swimmerCount)
        }
    }))

    return result;
}