"use client"

import InputSelect from "@/components/backend/input/InputSelect.component";
import InputText from "@/components/backend/input/InputText.component";
import SubmitButton from "@/components/backend/input/SubmitButton.component";
import Grid from "@/components/grid/Grid.component";
import { Swimmer } from "@/lib/model";
import { CapColor } from "@/lib/model/CapColor.model";
import { WithMongoId } from "@/lib/model/WithMongoId.model";
import { getCapColors } from "@/lib/mongo/collections";
import { useState } from "react";
import registerSwimmerAction from "./registerSwimmer.action";

export default function RegisterSwimmerForm({ swimmer, capColors }: { swimmer: Swimmer, capColors: (CapColor & WithMongoId)[] }) {
    const [capColorId, setCapColorId] = useState<string>(capColors[0]._id.toString());
    const [capNr, setCapNr] = useState<number>(0);
    const [regNr, setRegNr] = useState<number>(0);

    return <form onSubmit={e => {
        e.preventDefault();
        registerSwimmerAction(swimmer._id?.toString() || "", capColorId, capNr, regNr)
            .then(alert)
    }}>
        <Grid>
            <InputSelect title="Kappenfarbe" options={
                capColors.map(cap => ({ name: cap.name, value: cap._id.toString() }))
            } value={capColorId} onChange={e => setCapColorId(e.target.value)} />
            <InputText title="Kappennummer" value={capNr || 0} onChange={e => setCapNr(parseInt(e.target.value))} />
            <InputText title="Registriernummer" value={regNr || 0} onChange={e => setRegNr(parseInt(e.target.value))} />
        </Grid>
        <SubmitButton>Anmelden</SubmitButton>
    </form>
}