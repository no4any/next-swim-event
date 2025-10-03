"use client"

import InputCheckbox from "@/components/backend/input/InputCheckbox.component";
import InputNumber from "@/components/backend/input/InputNumber.component";
import SubmitButton from "@/components/backend/input/SubmitButton.component";
import { LapsEntry } from "@/lib/model/LapsEntry.model";
import { WithMongoId } from "@/lib/model/WithMongoId.model";
import { useState } from "react";
import editLapAction from "./editLap.action";

export default function EditLapForm({ lap, swimmerId }: { lap: LapsEntry & WithMongoId, swimmerId: string }) {
    const [deactivated, setDeactivated] = useState(!!lap.deactivated);
    const [laps, setLaps] = useState(lap.laps);
    const [night, setNight] = useState(lap.nightCup || false);

    return <form onSubmit={e => {
        e.preventDefault();
        editLapAction(lap._id.toString(), swimmerId, laps, deactivated, night).then(alert);
    }}>
        <InputNumber title="Bahnen" value={laps} onChange={e => setLaps(parseInt(e.target.value))} />
        <InputCheckbox checked={deactivated} onChange={e => setDeactivated(e.target.checked)}>Deaktiviert</InputCheckbox>
        <InputCheckbox checked={night} onChange={e => setNight(e.target.checked)}>Nackpokal</InputCheckbox>
        <SubmitButton>Anpassen</SubmitButton>
    </form>
}