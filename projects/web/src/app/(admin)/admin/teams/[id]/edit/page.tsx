import getTeam from "@/lib/mongo/collections/teams/getTeam.function";
import { notFound } from "next/navigation";
import EditTeamForm from "./EditTeam.form";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function EditTeamPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const team = await getTeam(id);

    if (team === null) notFound();

    return <div>
        <h1>Team ändern: {team.name}</h1>
        <div>
            <EditTeamForm team={team} />
        </div>
    </div>
}