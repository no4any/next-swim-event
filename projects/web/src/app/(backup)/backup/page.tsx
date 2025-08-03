import { getSwimmers } from "@/lib/mongo/collections/swimmers/getSwimmers.function";
import getTeams from "@/lib/mongo/collections/teams/getTeams.function";
import fs from "fs";

export const revalidate = 0;
export const dynamic = 'force-dynamic';

const TEAMS_FILE = "/data/teams.json";
const SWIMMERS_FILE = "/data/swimmers.json";

export default async function BackupPage() {
    const swimmers = await getSwimmers();
    const swimmersJson = JSON.stringify(swimmers);
    fs.writeFileSync(SWIMMERS_FILE, swimmersJson)

    const teams = await getTeams();
    const teamsJson = JSON.stringify(teams);
    fs.writeFileSync(TEAMS_FILE, teamsJson);

    return <div>Toll!</div>
}