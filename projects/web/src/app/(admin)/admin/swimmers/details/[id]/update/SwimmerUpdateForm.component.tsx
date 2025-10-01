"use client"

import InputCheckbox from "@/components/backend/input/InputCheckbox.component";
import InputDate from "@/components/backend/input/InputDate.component";
import InputSelect from "@/components/backend/input/InputSelect.component";
import InputText from "@/components/backend/input/InputText.component";
import Grid from "@/components/grid/Grid.component";
import SubmitButton from "@/components/input/SubmitButton.component";
import { Swimmer } from "@/lib/model";
import { useState } from "react";
import swimmerUpdateAction from "./swimmerUpdate.action";

export default function SwimmerUpdateForm({ id, swimmer }: { id: string, swimmer: Swimmer }) {
    const [firstName, setFirstName] = useState(swimmer.firstName);
    const [lastName, setLastName] = useState(swimmer.lastName);
    const [email, setEmail] = useState(swimmer.email);
    const [city, setCity] = useState(swimmer.city);
    const [gender, setGender] = useState(swimmer.gender);
    const [birthday, setBirthday] = useState(swimmer.birthday);
    const [breakfast, setBreakfast] = useState(swimmer.breakfast);
    const [distanceRating, setDistanceRating] = useState(swimmer.distanceRating);
    const [allowsPublishingName, setAllowsPublishingName] = useState(swimmer.allowsPublishingName);
    const [newsletter, setNewsletter] = useState(swimmer.newsletter);

    return <form onSubmit={e => {
        e.preventDefault();
        swimmerUpdateAction(id, {
            firstName,
            lastName,
            email,
            city,
            gender,
            birthday,
            breakfast,
            distanceRating,
            allowsPublishingName,
            newsletter,
            isRegistered: swimmer.isRegistered,
            isClosed: swimmer.isClosed,
            isManaged: swimmer.isManaged
        }).then(alert).catch(console.log)
    }
    }>
        <Grid>
            <InputText title="Vorname" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <InputText title="Nachname" value={lastName} onChange={e => setLastName(e.target.value)} />
            <InputText title="E-Mail" value={email} onChange={e => setEmail(e.target.value)} />
            <InputText title="Stadt" value={city} onChange={e => setCity(e.target.value)} />
            <InputSelect value={gender} title="Geschlecht" onChange={e => setGender(e.target.value as "M" | "W" | "0")} options={[
                { name: "Keine Angabe", value: "0" },
                { name: "Männlich", value: "M" },
                { name: "Weiblich", value: "W" }
            ]} />
            <InputDate title="Geburtstag" value={birthday} onChange={e => setBirthday(e.target.value)} />
        </Grid>
        <div>
            <InputCheckbox checked={breakfast} onChange={e => setBreakfast(e.target.checked)}>Frühstück</InputCheckbox>
            <InputCheckbox checked={distanceRating} onChange={e => setDistanceRating(e.target.checked)}>Distanzwertung</InputCheckbox>
            <InputCheckbox checked={allowsPublishingName} onChange={e => setAllowsPublishingName(e.target.checked)}>Namen anzeigen</InputCheckbox>
            <InputCheckbox checked={newsletter} onChange={e => setNewsletter(e.target.checked)}>Newsletter</InputCheckbox>
        </div>
        <SubmitButton>Ändern</SubmitButton>
    </form>
}