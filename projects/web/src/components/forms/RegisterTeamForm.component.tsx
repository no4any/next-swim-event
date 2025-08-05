"use client"

import { useState } from "react"
import InputCheckbox from "../input/InputCheckbox.component"
import InputText from "../input/InputText.component";

export default function RegisterTeamForm() {
    const [select, setSelect] = useState<boolean>(false);
    const [name, setName] = useState<string>("");

    return <div>
        <div>
            <InputCheckbox name="addTeam" checked={select} onChange={e => setSelect(e.target.checked)}>
                Ich möchte ein Team anmelden <span className="italic">(Sie erhalten nach erfolgreicher Anmeldung einen Link über den sich zukünftige Teammitglieder anmelden können. Teammitglieder ohne E-Mail Adresse können sie hier selbstständig eintragen.)</span>
            </InputCheckbox>
        </div>
        {select ? <div>
            <InputText title="Teamname" name="teamname" value={name} onChange={evnt => setName(evnt.target.value)} />
        </div> : undefined}
    </div>
}