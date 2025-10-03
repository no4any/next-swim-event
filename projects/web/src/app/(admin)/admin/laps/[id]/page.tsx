import SwimmerDetails from "@/components/swimmer/SwimmerDetails.component";
import { getLap } from "@/lib/mongo/collections/laps/getLap.function";
import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import { notFound } from "next/navigation";
import EditLapForm from "./EditLap.form";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function EditLap({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const lapEntry = await getLap(id);
    if (lapEntry === null) notFound();

    const swimmer = await getSwimmer(lapEntry.swimmerId);
    if (swimmer === null) notFound();

    return <div>
        <h1>Bahnenerfassung anpassen</h1>
        <h2>Buchungsnummer: {lapEntry.nr}</h2>
        <EditLapForm swimmerId={swimmer._id.toString()} lap={lapEntry} />
        <SwimmerDetails swimmer={swimmer} />
    </div>
}