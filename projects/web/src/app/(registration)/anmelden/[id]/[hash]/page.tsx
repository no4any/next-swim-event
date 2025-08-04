import Grid from "@/components/grid/Grid.component";
import { DOMAIN } from "@/env";
import { Swimmer } from "@/lib/model";
import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import { getSwimmersInTeam } from "@/lib/mongo/collections/swimmers/getSwimmersInTeam.function";
import getTeam from "@/lib/mongo/collections/teams/getTeam.function";
import swimHash from "@/lib/swimHash.function";
import { ObjectId } from "mongodb";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

async function checkHash(id: string, hash: string) {
    return hash === await swimHash(id);
}

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

    return <div>
        <h1 className="mb-4">Ihre Daten {isTeamLead && "und Teammanagement"}</h1>

        {isTeamLead && <>
            <div className="font-bold">Teammitglieder die sich selbstständig anmelden können, können sich über folgenden Link registrien:</div>
            <div><a href={link}>{link}</a></div>
        </>}

        <h2>Ihre Daten</h2>
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

        <Team isLead={isTeamLead} swimmers={await getSwimmersInTeam(team?._id || "")}/>
    </div>
}

function Team({ isLead, swimmers }: { isLead: boolean, swimmers: Swimmer[] }) {
    if (!isLead) {
        return <></>
    }

    return isLead && <><h2>Ihr Team</h2>
        <Grid>
            <div className="font-bold">Name</div>
            <div className="font-bold">Geburtsdatum</div>
            <div className="font-bold">Geschlecht</div>
        </Grid>
        {swimmers.map(swimmer => <Grid key={swimmer?._id?.toString() || ""}>
            <div>{swimmer.firstName} {swimmer.lastName}</div>
            <div>{swimmer.birthday}</div>
            <div>{swimmer.gender}</div>
        </Grid>)}
    </>
}

function Detail({ title, value }: { title: string, value: string | ReactNode }) {
    return <div>
        <div className="font-bold">{title}</div>
        <div>{value}</div>
    </div>
}