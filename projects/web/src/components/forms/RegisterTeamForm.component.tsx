"use client"

import { useState } from "react"
import InputCheckbox from "../input/InputCheckbox.component"
import InputText from "../input/InputText.component";
import { useFormStatus } from "react-dom";

export default function RegisterTeamForm({ selected, teamName, onChange }: { selected: boolean, teamName: string, onChange: (selected: boolean, teamName: string) => void }) {
    const {pending} = useFormStatus();

    return <div>
        <div>
            <InputCheckbox disabled={pending} name="addTeam" checked={selected} onChange={e => onChange(e.target.checked, teamName)}>
                Ich möchte ein Team anmelden <span className="italic">(Sie erhalten nach erfolgreicher Anmeldung einen Link über den sich zukünftige Teammitglieder anmelden können. Teammitglieder ohne E-Mail Adresse können Sie selbstständig eintragen.)</span>
            </InputCheckbox>
        </div>
        {selected ? <div>
            <InputText required disabled={pending} title="Teamname" name="teamname" value={teamName} onChange={e => onChange(selected, e.target.value)} />
        </div> : undefined}
    </div>
}