import { getSwimmersInTeam } from "@/lib/mongo/collections/swimmers/getSwimmersInTeam.function";
import getTeam from "@/lib/mongo/collections/teams/getTeam.function";
import { notFound } from "next/navigation";
import SwimmerItem from "../../swimmers/SwimmerItem.component";
import Link from "next/link";

function fullName(last: string, first: string) {
    return `${last}, ${first}`
}

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function TeamPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const team = await getTeam(id);
    const swimmers = (await getSwimmersInTeam(id)).sort((a, b) => fullName(a.lastName, a.firstName) > fullName(b.lastName, b.firstName) ? 1 : -1);

    if (team === null) notFound();

    return <div>
        <h1 className="mb-3">Team: {team.name}</h1>
        <div>
            <Link href={`/admin/teams/${id}/edit`}>Bearbeiten</Link>
        </div>
        <div>
            {swimmers.map(swimmer => <SwimmerItem key={swimmer._id?.toString() || ""} swimmer={swimmer} />)}
        </div>
    </div>
}