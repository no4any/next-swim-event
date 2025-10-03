"use client"

import SubmitButton from "@/components/backend/input/SubmitButton.component";
import capUpdateAction from "./capUpdate.action";
import { useState } from "react";
import { CapColor } from "@/lib/model/CapColor.model";
import { WithMongoId } from "@/lib/model/WithMongoId.model";
import InputSelect from "@/components/backend/input/InputSelect.component";
import InputNumber from "@/components/backend/input/InputNumber.component";

export default function CapUpdateForm({ id, capColorId, capNum, capColors }: { id: string, capColorId: string, capNum: number, capColors: (CapColor & WithMongoId)[] }) {
    const [colorId, setColorId] = useState(capColorId);
    const [capNr, setCapNr] = useState(capNum);

    return <form onSubmit={e => {
        e.preventDefault();
        capUpdateAction(id, colorId, capNr).then(alert);
    }}>
        <div className="grid grid-cols-2">
            <InputSelect title="Kappenfarbe" options={capColors.map(c => ({ name: c.name, value: c._id.toString() }))} value={colorId} onChange={e => setColorId(e.target.value)} />
            <InputNumber title="Kappennummer" value={capNr} onChange={e => setCapNr(parseInt(e.target.value))} />
        </div>
        <SubmitButton>Ändern</SubmitButton>
    </form>
}