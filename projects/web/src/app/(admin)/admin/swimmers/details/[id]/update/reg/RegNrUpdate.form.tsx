"use client"

import SubmitButton from "@/components/backend/input/SubmitButton.component";

import { useState } from "react";
import InputNumber from "@/components/backend/input/InputNumber.component";
import regNrUpdateAction from "./regNrUpdate.action";

export default function RegNrUpdateForm({ id, regNum }: { id: string, regNum: number }) {
    const [regNr, setRegNr] = useState(regNum);

    return <form onSubmit={e => {
        e.preventDefault();
        regNrUpdateAction(id, regNr).then(alert);
    }}>
        <div>
            <InputNumber title="Registrienummer" value={regNr} onChange={e => setRegNr(parseInt(e.target.value))} />
        </div>
        <SubmitButton>Ändern</SubmitButton>
    </form>
}