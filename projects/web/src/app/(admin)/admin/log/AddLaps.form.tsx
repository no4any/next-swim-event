"use client"

import { useState } from "react"
import logAction from "./log.action";
import InputNumber from "@/components/backend/input/InputNumber.component";
import SubmitButton from "@/components/backend/input/SubmitButton.component";
import Link from "next/link";

export default function AddLapsForm({ id, night }: { id: string, night: boolean }) {
    const [insertedId, setInsertedId] = useState<number | null>(null)
    const [laps, setLaps] = useState(0);

    if(insertedId !== null) {
        return <div>
            <h2>Buchungsnummer: <span>{insertedId}</span></h2>
            <div className="mt-3">
                <Link className="p-2 mt-2 bg-dlrg-blue rounded w-full font-bold cursor-pointer" href={`/admin/log/${night?"night":"day"}`}>Weiter buchen ({night?"Nachpokal":"Regulär"})</Link>
            </div>
        </div>
    }

    return <form onSubmit={e => {
        e.preventDefault();
        logAction(id, laps, night).then(setInsertedId).catch(e => alert("Fehler!!!"));
    }}>
        <InputNumber title="Anzahl Bahnen" value={laps} onChange={e => setLaps(parseInt(e.target.value))} />
        <SubmitButton>Bahnen erfassen</SubmitButton>
    </form>
}