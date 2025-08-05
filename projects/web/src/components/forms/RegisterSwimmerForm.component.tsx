"use client"

import { ChangeEvent, useEffect, useState } from "react";
import Grid from "../grid/Grid.component"
import InputCheckbox from "../input/InputCheckbox.component";
import InputDate from "../input/InputDate.component";
import InputSelect from "../input/InputSelect.component";
import InputText from "../input/InputText.component"
import { useFormStatus } from "react-dom";
import { Swimmer } from "@/lib/model";

type RegisterSwimmerFormProps = { swimmer: Swimmer, skipMail?: boolean, onChange: (swimmer: Swimmer) => void };

export default function RegisterSwimmerForm({swimmer, skipMail, onChange}: RegisterSwimmerFormProps) {
    const status = useFormStatus();

    function handleString(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
        const { name, value } = e.target;
        onChange({
            ...swimmer,
            [name]: value
        })
    }

    function handleChecked(e: ChangeEvent<HTMLInputElement>) {
        const { name, checked } = e.target;
        onChange({
            ...swimmer,
            [name]: checked
        })
    }

    return <div className="mb-4 mt-4">
        <Grid>
            <div><InputText disabled={status.pending} value={swimmer.firstName} onChange={handleString} title="Vorname" name="firstName" required /> </div>
            <div><InputText disabled={status.pending} value={swimmer.lastName} onChange={handleString} title="Name" name="lastName" required /> </div>
            {!skipMail && <div><InputText disabled={status.pending} value={swimmer.email} onChange={handleString} title="E-Mail" name="email" required /></div>}
            <div><InputText disabled={status.pending} value={swimmer.city || ""} onChange={handleString} title="Stadt" name="city" /></div>
            <div><InputSelect disabled={status.pending} value={swimmer.gender} onChange={handleString} title="Geschlecht" name="gender" options={[
                { name: "Keine Angabe", value: "0" },
                { name: "Männlich", value: "M" },
                { name: "Weiblich", value: "W" }
            ]} /></div>
            <div><InputDate disabled={status.pending} value={swimmer.birthday || "1900-01-01"} onChange={handleString} title="Geburtsdatum" name="birthday" /></div>
        </Grid >
        <div className="mt-4">
            <InputCheckbox disabled={status.pending} checked={swimmer.breakfast} onChange={handleChecked} name="breakfast">Ich möchte Frühstück (6€ bei Anmeldung zusätzlich zu bezahlen)</InputCheckbox>
            <InputCheckbox disabled={status.pending} checked={swimmer.distanceRating} onChange={handleChecked} name="distanceRating">Ich möchte <span className="font-bold underline">NICHT</span> an der Distanzwertung  teilnehmen (<span className="font-bold italic">Führt zum Ausschluss von allen Wertungen und Siegerehrungen</span>)</InputCheckbox>
            <InputCheckbox disabled={status.pending} checked={swimmer.allowsPublishingName} onChange={handleChecked} name="allowsPublishingName">Ich möchte <span className="font-bold underline">NICHT</span> dass mein Name mit meinen Leistungen veröffentlicht wird (<span className="font-bold italic">Führt dazu, dass bei veröffentlichung von Ergebnissen Ihr name nicht angezeigt wird)</span>)</InputCheckbox>
            {!skipMail && <InputCheckbox disabled={status.pending} checked={swimmer.newsletter} onChange={handleChecked} name="newsletter">Ich möchte über zukünftige Veranstaltungen per Mail informiert werden</InputCheckbox>}
        </div>
    </div >
}