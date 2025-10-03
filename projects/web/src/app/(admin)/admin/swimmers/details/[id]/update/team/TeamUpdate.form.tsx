"use client"

import { Team } from "@/lib/model";
import { WithMongoId } from "@/lib/model/WithMongoId.model";
import teamUpdateAction from "./teamUpdate.action";
import { useState } from "react";
import SubmitButton from "@/components/backend/input/SubmitButton.component";
import InputSelect from "@/components/input/InputSelect.component";

export default function TeamUpdateForm({ userId, teamId, teams }: { userId: string, teamId: string, teams: (Team & WithMongoId)[] }) {
    const [team, setTeam] = useState(teamId);

    return <form onSubmit={e => {
        e.preventDefault();
        teamUpdateAction(userId, team).then(alert);
    }}>
        <InputSelect title="Neues Team" options={[
            { name: "KEIN TEAM", value: "" },
            ...teams.map(t => ({ name: t.name, value: t._id.toString() }))
        ]} value={team} onChange={e => setTeam(e.target.value)}/>
        <SubmitButton>Team ändern</SubmitButton>
    </form>
}