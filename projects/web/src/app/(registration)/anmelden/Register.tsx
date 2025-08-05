"use client"

import { useActionState, useEffect, useState } from "react"
import addSwimmerAction from "./addSwimmerAction"
import RegisterSwimmerForm from "@/components/forms/RegisterSwimmerForm.component"
import RegisterTeamForm from "@/components/forms/RegisterTeamForm.component"
import SubmitButton from "@/components/input/SubmitButton.component"
import ErrorBlock from "@/components/ErrorBlock.component"
import addSwimmerForTeamAction from "./addSwimmerForTeamAction"
import { Swimmer } from "@/lib/model"
import { useFormStatus } from "react-dom"

export default function Register({ team }: { team?: string }) {
  const [state, formAction, pending] = useActionState(team ? addSwimmerForTeamAction : addSwimmerAction, {});
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

  const [teamConfig, setTeamConfig] = useState({
    selected: false,
    teamName: ""
  });

  useEffect(() => {
    setSwimmer({ ...swimmer })
  }, [pending])


  return <div>
    {state.userError && <ErrorBlock>Es ist ein Fehler Aufgetreten Voraussichtlich ist die E-Mail Adresse bereits vergeben oder nicht korrekt.</ErrorBlock>}
    {state.teamError && <ErrorBlock>Der Teamname ist bereits vergeben.</ErrorBlock>}
    <form action={formAction}>
      <RegisterSwimmerForm swimmer={swimmer} onChange={setSwimmer} />
      {team ? <input type="hidden" name="teamId" value={team} /> : <RegisterTeamForm selected={teamConfig.selected} teamName={teamConfig.teamName} onChange={(selected, teamName) => setTeamConfig({ selected, teamName })} />}
      <SubmitButton>Anmelden</SubmitButton>
    </form>
  </div>
}