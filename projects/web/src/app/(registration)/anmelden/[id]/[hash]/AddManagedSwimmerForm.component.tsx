"use client"

import RegisterSwimmerForm from "@/components/forms/RegisterSwimmerForm.component";
import SubmitButton from "@/components/input/SubmitButton.component";

export default function AddManagedSwimmerForm({ id, hash, teamId }: { id: string, hash: string, teamId: string }) {
    return <form>
        <RegisterSwimmerForm skipMail />
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="hash" value={hash} />
        <input type="hidden" name="teamId" value={teamId} />
        <SubmitButton>Hinzufügen</SubmitButton>
    </form>
}