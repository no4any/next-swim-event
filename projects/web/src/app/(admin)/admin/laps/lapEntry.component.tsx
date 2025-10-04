"use client"

import { LapsEntry } from "@/lib/model/LapsEntry.model"
import Link from "next/link"

export default function LapEntry({ lap }: { lap: LapsEntry }) {
    return <Link href={`/admin/laps/${lap._id?.toString()}`}>
        <div className="grid grid-cols-4 hover:bg-gray-300">
            <div>{lap.nr}</div>
            <div className="text-center">{lap.deactivated ? "Deaktiviert" : ""}</div>
            <div className="text-center">{lap.nightCup ? "Nachpokal" : ""}</div>
            <div className="text-right">{lap.laps}</div>
        </div>
    </Link>
}