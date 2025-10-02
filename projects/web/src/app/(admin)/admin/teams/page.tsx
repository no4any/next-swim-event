import getTeams from "@/lib/mongo/collections/teams/getTeams.function";
import TeamsItem from "./TeamsItem.component";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function TeamsPage() {
    const teams = await getTeams();

    return <div>
        <h1>Teams</h1>
        <div>
            {teams.map(team => <TeamsItem key={team._id?.toString() || ""} team={team} />)}
        </div>
    </div>
}