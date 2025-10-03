"use client"

import InputNumber from "@/components/backend/input/InputNumber.component";
import InputSelect from "@/components/backend/input/InputSelect.component";
import SubmitButton from "@/components/backend/input/SubmitButton.component";
import { CapColor } from "@/lib/model/CapColor.model";
import { WithMongoId } from "@/lib/model/WithMongoId.model";
import { useState } from "react";
import getSwimmerByRegNrAction from "./getSwimmerByRegNr.action";
import getSwimmerByCapAction from "./getSwimmerByCap.action";

export default function FindSwimmerForm({ night, colors }: { night: boolean, colors: (CapColor & WithMongoId)[] }) {
    const [regNr, setRegNr] = useState(0);
    const [capColor, setCapColor] = useState(colors[0]._id.toString());
    const [capNr, setCapNr] = useState(0);
    return <div>
        <div>
            <h2>Nach Registriernummer</h2>
            <form onSubmit={e => {
                e.preventDefault();
                getSwimmerByRegNrAction(regNr, night).then(alert)
            }}>
                <InputNumber title="Registriernummer" value={regNr} onChange={e => setRegNr(parseInt(e.target.value))} />
                <SubmitButton>Suchen</SubmitButton>
            </form>
        </div>
        <div>
            <h2>Nach Badekappe</h2>
            <form onSubmit={e => {
                e.preventDefault();
                getSwimmerByCapAction(capColor, capNr, night).then(alert);
            }}>
                <InputSelect title="Kappenfarbe" value={capColor} onChange={e => setCapColor(e.target.value)} options={colors.map(c => ({ name: c.name, value: c._id.toString() }))} />
                <InputNumber title="Kappennummer" value={capNr} onChange={e => setCapNr(parseInt(e.target.value))} />
                <SubmitButton>Suchen</SubmitButton>
            </form>
        </div>
    </div>
}