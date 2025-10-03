import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import { notFound } from "next/navigation";
import TeamUpdateForm from "./TeamUpdate.form";
import getTeams from "@/lib/mongo/collections/teams/getTeams.function";

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default async function UpdateTeamPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const swimmer = await getSwimmer(id);

    if (swimmer === null) notFound();

    const teams = await getTeams();

    return <div>
        <h1>Team ändern</h1>
        <h2>{swimmer.lastName}, {swimmer.firstName}</h2>
        <TeamUpdateForm userId={id} teamId={swimmer.teamId || ""} teams={teams} />
    </div>
}