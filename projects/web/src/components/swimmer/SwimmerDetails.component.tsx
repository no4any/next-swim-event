import { Swimmer, Team } from "@/lib/model";
import Grid from "../grid/Grid.component";
import Detail from "../Detail.component";
import dateToString from "@/lib/dateToString.function";

export default function SwimmerDetails({ swimmer, team }: { swimmer: Swimmer, team?: Team }) {
    return <Grid>
        <Detail title="Vorname" value={swimmer.firstName} />
        <Detail title="Name" value={swimmer.lastName} />
        <Detail title="E-Mail" value={swimmer.email || ""} />
        <Detail title="Stadt" value={swimmer.city || ""} />
        <Detail title="Geschlecht" value={swimmer.gender} />
        <Detail title="Geburtsdatum" value={swimmer.birthday ? dateToString(new Date(swimmer.birthday)) : ""} />
        <Detail title="Frühstück" value={swimmer.breakfast ? "Ja" : "Nein"} />
        <Detail title="Teilnahme an Distanzwertung" value={swimmer.distanceRating ? "Ja" : "Nein"} />
        <Detail title="Namentliche Nennung" value={swimmer.allowsPublishingName ? "Ja" : "Nein"} />
        <Detail title="Newsletter" value={swimmer.newsletter ? "Ja" : "Nein"} />
        {team && <Detail title="Team" value={team?.name ? team?.name : <i>Kein Team</i>} />}
    </Grid>
}