import SmallButton from "@/components/input/SmallButton.component";
import SwimmerDetails from "@/components/swimmer/SwimmerDetails.component";
import checkHash from "@/lib/checkHash.function";
import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import getTeam from "@/lib/mongo/collections/teams/getTeam.function";
import Link from "next/link";
import { notFound } from "next/navigation";
import { nullable } from "zod";

export default async function ManagedSwimmerDetailsPage({ params }: { params: Promise<{ id: string, hash: string, managedSwimmerId: string }> }) {
    const { id, hash, managedSwimmerId } = await params;

    if (!await checkHash(id, hash)) {
        notFound();
    }

    const swimmer = await getSwimmer(managedSwimmerId);

    if (swimmer === null) {
        notFound();
    }

    if (swimmer.managerId !== id) {
        notFound();
    }

    const team = await getTeam(swimmer.teamId || "");

    return <div>
        <h1 className="mb-4">Details zu Schwimmer</h1>
        <SwimmerDetails swimmer={swimmer} team={team || undefined} />
        <Link href={`/anmelden/${id}/${hash}`}><SmallButton className="mt-4" color="GREEN">Zurück</SmallButton></Link>
    </div>
}