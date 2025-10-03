import { getSwimmersCollection } from "@/lib/mongo/collections";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function AdminPage() {
    const breakfastCount = await getBreakfasts();

    return <div>
        <h1>AdminPage</h1>
        <div className="grid grid-cols-3">
            <div>
                <h2>{breakfastCount} Stück</h2>
            </div>
        </div>
    </div>
}

async function getBreakfasts() {
    const col = await getSwimmersCollection();

    return (await col.find({breakfast: true, isRegistered: true}).toArray()).length
}