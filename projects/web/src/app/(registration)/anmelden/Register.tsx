"use client"

import { useActionState } from "react"
import addSwimmerAction from "./addSwimmerAction"
import RegisterSwimmerForm from "@/components/forms/RegisterSwimmerForm.component"
import RegisterTeamForm from "@/components/forms/RegisterTeamForm.component"
import SubmitButton from "@/components/input/SubmitButton.component"
import ErrorBlock from "@/components/ErrorBlock.component"
import addSwimmerForTeamAction from "./addSwimmerForTeamAction"

export default function Register({ team }: { team?: string }) {
  const [state, formAction] = useActionState(team ? addSwimmerForTeamAction : addSwimmerAction, {})

  return <div>
    {state.userError && <ErrorBlock>Es ist ein Fehler Aufgetreten Voraussichtlich ist die E-Mail Adresse bereits vergeben oder nicht korrekt.</ErrorBlock>}
    {state.teamError && <ErrorBlock>Der Teamname ist bereits vergeben.</ErrorBlock>}
    <form action={formAction}>
      <RegisterSwimmerForm />
      {team ? undefined : <RegisterTeamForm />}
      <input type="hidden" name="teamId" value={team} />
      <SubmitButton>Anmelden</SubmitButton>
    </form>
  </div>
}