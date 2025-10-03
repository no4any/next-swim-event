import { getSwimmersCollection } from "@/lib/mongo/collections";
import { getSwimmers } from "@/lib/mongo/collections/swimmers/getSwimmers.function";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function AdminPage() {
    const breakfastCount = await getBreakfasts();

    const swimmers = await getSwimmers();
    const unmanaged = swimmers.filter(s => !s.isManaged);
    const registered = swimmers.filter(s => s.isRegistered);

    return <div>
        <h1>AdminPage</h1>
        <div className="grid grid-cols-3">
            <div>
                <h2>Schwimmer</h2>
                <h3>{swimmers.length} ({unmanaged.length})</h3>
            </div>
            <div>
                <h2>Angemeldete Schwimmer</h2>
                <h3>{registered.length}</h3>
            </div>
            <div>
                <h2>Frühstücke</h2>
                <h3>{breakfastCount} Stück</h3>
            </div>
        </div>
    </div>
}

async function getBreakfasts() {
    const col = await getSwimmersCollection();

    return (await col.find({breakfast: true, isRegistered: true}).toArray()).length
}