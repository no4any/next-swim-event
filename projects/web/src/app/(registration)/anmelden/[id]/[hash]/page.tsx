import { DOMAIN } from "@/env";
import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import { getSwimmersInTeam } from "@/lib/mongo/collections/swimmers/getSwimmersInTeam.function";
import getTeam from "@/lib/mongo/collections/teams/getTeam.function";
import { notFound } from "next/navigation";
import checkHash from "@/lib/checkHash.function";
import TeamManagement from "./TeamManagement.component";
import plain from "@/lib/plain.function";
import SwimmerDetails from "@/components/swimmer/SwimmerDetails.component";


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

    return <div>
        <h1 className="mb-4">Ihre Daten {isTeamLead && "und Teammanagement"}</h1>

        {isTeamLead && <>
            <div className="font-bold">Teammitglieder die sich selbstständig anmelden können, können sich über folgenden Link registrien:</div>
            <div><a href={link}>{link}</a></div>
        </>}

        <h2 className="my-4">Ihre Daten</h2>
        <div className="my-4 italic">Sollten Sie Änderungen wünschen, erwähnen Sie dies bei der Registrierung am Veranstaltungstag</div>
        <SwimmerDetails swimmer={swimmer} team={team || undefined} />

        <TeamManagement id={id} hash={hash} teamId={team?._id?.toString() || ""} isLead={isTeamLead} swimmers={teamSwimmers} />
    </div>
}