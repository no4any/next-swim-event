import { getLaps } from "@/lib/mongo/collections/laps/getLaps.function"
import LapEntry from "./lapEntry.component";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function LapsPage() {
    const laps = await getLaps();
    return <div>
        <h1 className="mb-3">Bahnen</h1>
        {laps.map(l => <LapEntry key={l._id.toString()} lap={l} />)}
    </div>
}