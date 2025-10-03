import { getCapColors, getUsers } from "@/lib/mongo/collections";
import { getCountersCollection } from "@/lib/mongo/collections/counters/getCountersCollection.function";
import { getLaps } from "@/lib/mongo/collections/laps/getLaps.function";
import { getSwimmers } from "@/lib/mongo/collections/swimmers/getSwimmers.function";
import getTeams from "@/lib/mongo/collections/teams/getTeams.function";
import fs from "fs";

export const revalidate = 0;
export const dynamic = 'force-dynamic';

const TEAMS_FILE = "/data/teams.json";
const SWIMMERS_FILE = "/data/swimmers.json";
const CAP_COLORS_FILE = "/data/cap_colors.json";
const USERS_FILE = "/data/users.json";
const COUNTERS_FILE = "/data/counters.json";
const LAPS_FILE = "/data/laps.json"

export default async function BackupPage() {
    const swimmers = await getSwimmers();
    const swimmersJson = JSON.stringify(swimmers);
    fs.writeFileSync(SWIMMERS_FILE, swimmersJson)

    const teams = await getTeams();
    const teamsJson = JSON.stringify(teams);
    fs.writeFileSync(TEAMS_FILE, teamsJson);

    const capColorsJSON = JSON.stringify(await getCapColors());
    fs.writeFileSync(CAP_COLORS_FILE, capColorsJSON);

    const usersJSON = JSON.stringify(await getUsers());
    fs.writeFileSync(USERS_FILE, usersJSON);

    const countersJSON = JSON.stringify(await (await getCountersCollection()).find({}).toArray());
    fs.writeFileSync(COUNTERS_FILE, countersJSON);

    const lapsJSON = JSON.stringify(await getLaps());
    fs.writeFileSync(LAPS_FILE, lapsJSON);

    return <div>Toll!</div>
}