import { LapsEntry } from "@/lib/model/LapsEntry.model";
import { getLaps } from "@/lib/mongo/collections/laps/getLaps.function"
import Link from "next/link";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function LapsPage() {
    const laps = await getLaps();
    return <div>
        <h1 className="mb-3">Bahnen</h1>
        {laps.map(l => <LapEntry key={l._id.toString()} lap={l} />)}
    </div>
}

async function LapEntry({ lap }: { lap: LapsEntry }) {
    return <Link href={`/admin/laps/${lap._id?.toString()}`}>
        <div className="grid grid-cols-4">
            <div>{lap.nr}</div>
            <div className="text-center">{lap.deactivated ? "Deaktiviert" : ""}</div>
            <div className="text-center">{lap.nightCup ? "Nachpokal" : ""}</div>
            <div className="text-right">{lap.laps}</div>
        </div>
    </Link>
}