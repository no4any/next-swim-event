"use client"

import InputText from "@/components/backend/input/InputText.component";
import SubmitButton from "@/components/backend/input/SubmitButton.component";
import { Team } from "@/lib/model";
import { useState } from "react";
import editTeamAction from "./editTeam.action";

export default function EditTeamForm({ team }: { team: Team }) {
    const [name, setName] = useState(team.name);

    return <form onSubmit={e => {
        e.preventDefault();
        editTeamAction(team._id?.toString() || "FEHLER", name)
    }}>
        <InputText title="Name" value={name} onChange={e => setName(e.target.value)} />
        <SubmitButton>Ändern</SubmitButton>
    </form>
}