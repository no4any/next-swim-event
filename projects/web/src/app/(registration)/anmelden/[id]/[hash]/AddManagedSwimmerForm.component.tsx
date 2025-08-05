"use client"

import RegisterSwimmerForm from "@/components/forms/RegisterSwimmerForm.component";
import SubmitButton from "@/components/input/SubmitButton.component";
import { useActionState, useState } from "react";
import addManagedSwimmerAction from "./addManagedSwimmerAction";
import ErrorBlock from "@/components/ErrorBlock.component";
import { Swimmer } from "@/lib/model";

export default function AddManagedSwimmerForm({ id, hash, teamId }: { id: string, hash: string, teamId: string }) {
    const [state, formAction] = useActionState(addManagedSwimmerAction, {});

    const [swimmer, setSwimmer] = useState<Swimmer>({
        isRegistered: false,
        isClosed: false,
        isManaged: false,
        firstName: "",
        lastName: "",
        gender: "0",
        distanceRating: false,
        breakfast: false,
        allowsPublishingName: false,
        email: "",
        birthday: undefined,
        newsletter: false
    });

    return <div>
        {state.hashError && <ErrorBlock>Daten inkorrekt</ErrorBlock>}
        {state.swimmerError && <ErrorBlock>Fehler beim anlegen des Schwimmers. Versuchen Sie es erneut</ErrorBlock>}
        {state.teamNotExistsError && <ErrorBlock>Team existiert nicht. Laden Sie die Seite neu!</ErrorBlock>}
        <form action={formAction}>
            <RegisterSwimmerForm skipMail swimmer={swimmer} onChange={setSwimmer}/>
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="hash" value={hash} />
            <input type="hidden" name="teamId" value={teamId} />
            <SubmitButton>Hinzufügen</SubmitButton>
        </form>
    </div>
}