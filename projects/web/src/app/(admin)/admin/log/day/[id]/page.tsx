import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import { notFound } from "next/navigation";
import AddLapsForm from "../../AddLaps.form";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function LogUserForDay({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const swimmer = await getSwimmer(id);
    if (swimmer === null) notFound();

    return <div>
        <h1>Bahnen eintragen für Tag</h1>
        <h2>{swimmer.lastName}, {swimmer.firstName}</h2>
        <AddLapsForm id={id} night={false} />
    </div>
}