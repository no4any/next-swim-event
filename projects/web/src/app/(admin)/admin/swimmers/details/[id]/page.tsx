import Grid from "@/components/grid/Grid.component";
import getAge from "@/lib/getAge";
import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import CloseActionButton from "./CloseActionButton.component";
import { getCapColor } from "@/lib/mongo/collections";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function SwimmerDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const swimmer = await getSwimmer(id);

    const manager = swimmer?.isManaged ? await getSwimmer(swimmer.managerId || "") : null;

    if (swimmer === null) notFound();

    return <div>
        <h1 className="mb-3">{swimmer.lastName}, {swimmer.firstName}</h1>
        <div>
            {!swimmer.isRegistered && <Link href={`/admin/swimmers/details/${swimmer._id}/register`}>Anmelden</Link>}
            {swimmer.isRegistered && <Link href={`/admin/swimmers/details/${swimmer._id}/update/cap`}>Badekappe ändern</Link>}
            <Link href={`/admin/swimmers/details/${swimmer._id}/update`}>Bearbeiten</Link>
            <CloseActionButton id={swimmer._id.toString()} value={swimmer.isClosed} />
        </div>
        <Grid>
            <Details titel="Kappenfarbe">{swimmer.capColor && (await getCapColor(swimmer.capColor))?.name}</Details>
            <Details titel="Kappennummer">{swimmer.capNr && swimmer.capNr}</Details>
            <Details titel="Bandnummer">{`${swimmer.regNr}`}</Details>
            <Details titel="Geburtstag">{swimmer.birthday} {swimmer.birthday && ("(" + getAge(new Date(swimmer.birthday)) + " Jahre)")}</Details>
            <Details titel="Daten veröffentlichen">{swimmer.allowsPublishingName ? "Ja" : "Nein"}</Details>
            <Details titel="Frühstück">{swimmer.breakfast ? "Ja" : "Nein"}</Details>
            <Details titel="Stadt">{swimmer.city}</Details>
            <Details titel="Distanzwertung">{swimmer.distanceRating ? "Ja" : "Nein"}</Details>
            <Details titel="E-Mail">{swimmer.email}</Details>
            <Details titel="Geschlecht">{swimmer.gender}</Details>
            <Details titel="Geschlossen">{swimmer.isClosed ? "Ja" : "Nein"}</Details>
            <Details titel="Managed">{swimmer.isManaged && manager !== null ? <Link href={`/admin/swimmers/details/${manager._id}`}>{manager.firstName}, {manager.lastName}</Link> : "Nein"}</Details>
            <Details titel="Angemeldet">{swimmer.isRegistered ? "Ja" : "Nein"}</Details>
            <Details titel="Newsletter">{swimmer.newsletter ? "Ja" : "Nein"}</Details>
            <Details titel="Team">{swimmer.teamId}</Details>
            <Details titel="Geschlossen">{swimmer.isClosed ? "Ja" : "Nein"}</Details>
        </Grid>
    </div>
}

function Details({ titel, children }: { titel: string, children?: string | ReactNode }) {
    return <div>
        <div>{titel}</div>
        <div>{children}</div>
    </div>
}