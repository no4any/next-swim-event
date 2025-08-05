import Grid from "@/components/grid/Grid.component";
import { DOMAIN } from "@/env";
import { Swimmer, Team } from "@/lib/model";
import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import { getSwimmersInTeam } from "@/lib/mongo/collections/swimmers/getSwimmersInTeam.function";
import getTeam from "@/lib/mongo/collections/teams/getTeam.function";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import AddManagedSwimmerForm from "./AddManagedSwimmerForm.component";
import checkHash from "@/lib/checkHash.function";
import removeSwimmerAction from "./removeSwimmerAction";
import Detail from "@/components/Detail.component";
import TeamManagement from "./TeamManagement.component";
import plain from "@/lib/plain.function";


export default async function SwimmerPage({ params }: { params: Promise<{ id: string, hash: string }> }) {
    const { id, hash } = await params;

    if (!await checkHash(id, hash)) {
        notFound();
    }

    const swimmer = await getSwimmer(id);

    if (swimmer === null) {
        notFound();
    }

    const team = swimmer?.teamId ? await getTeam(swimmer.teamId) : null;
    const isTeamLead = swimmer?._id.toString() === team?.owner;

    if (swimmer.isManaged) {
        notFound();
    }

    const link = `https://${DOMAIN}/anmelden/${team?._id.toString() || "fehler"}`;

    const teamSwimmers = await plain(isTeamLead?await getSwimmersInTeam(team?._id || ""):[]);
    console.log(teamSwimmers);

    return <div>
        <h1 className="mb-4">Ihre Daten {isTeamLead && "und Teammanagement"}</h1>

        {isTeamLead && <>
            <div className="font-bold">Teammitglieder die sich selbstständig anmelden können, können sich über folgenden Link registrien:</div>
            <div><a href={link}>{link}</a></div>
        </>}

        <h2 className="my-4">Ihre Daten</h2>
        <div className="my-4 italic">Sollten Sie änderungen wünschen, erwähnen Sie dies bei der Registrierung am Veranstaltungstag</div>
        <Grid>
            <Detail title="Vorname" value={swimmer.firstName} />
            <Detail title="Name" value={swimmer.lastName} />
            <Detail title="E-Mail" value={swimmer.email || ""} />
            <Detail title="Stadt" value={swimmer.city || ""} />
            <Detail title="Geschlecht" value={swimmer.gender} />
            <Detail title="Geburtsdatum" value={swimmer.birthday || ""} />
            <Detail title="Frühstück" value={swimmer.breakfast ? "Ja" : "Nein"} />
            <Detail title="Teilnahme an Distanzwertung" value={swimmer.distanceRating ? "Ja" : "Nein"} />
            <Detail title="Namentliche Nennung" value={swimmer.allowsPublishingName ? "Ja" : "Nein"} />
            <Detail title="Newsletter" value={swimmer.newsletter ? "Ja" : "Nein"} />
            <Detail title="Team" value={team?.name ? team?.name : <i>Kein Team</i>} />
        </Grid>

        <TeamManagement id={id} hash={hash} teamId={team?._id?.toString() || ""} isLead={isTeamLead} swimmers={teamSwimmers} />
    </div>
}