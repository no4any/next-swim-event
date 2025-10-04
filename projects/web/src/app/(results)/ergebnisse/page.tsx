import { getLapsForSwimmerId } from "@/lib/mongo/collections/laps/getLapsForSwimmerId.function";
import { getLapsForTeamId } from "@/lib/mongo/collections/laps/getLapsForTeamId.function";
import { getSwimmers } from "@/lib/mongo/collections/swimmers/getSwimmers.function"
import getTeams from "@/lib/mongo/collections/teams/getTeams.function";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function ResultsPage() {
    const results = await fetchResults();

    const now = new Date();
    const printNow = `${now.getDate()+1}.${now.getMonth()}.${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`

    return <div>
        <h1 className="mb-3">Ergebnisse</h1>
        <div className="mb-3">Letztes Update: {printNow}</div>
        <h2>Einzelwertung</h2>
        {results.swimmers.map((s, i) => <div className="grid grid-cols-4">
            <div>{i + 1}.</div>
            <div>{s.name}</div>
            <div>{s.laps} Bahnen</div>
            <div>{s.laps * 50}m</div>
        </div>)}
        <h2>Teamwertung</h2>
        {results.teams.map((s, i) => <div className="grid grid-cols-4">
            <div>{i + 1}.</div>
            <div>{s.name}</div>
            <div>{s.laps} Bahnen</div>
            <div>{s.laps * 50}m</div>
        </div>)}
    </div>
}

async function fetchResults() {
    const swimmers = await getSwimmers();
    const swimmersResults = await Promise.all(swimmers.filter(s => s.distanceRating).map(async s => ({
        name: s.allowsPublishingName ? `${s.lastName}, ${s.firstName}` : "",
        laps: await getLapsForSwimmerId(s._id)
    })))

    const teams = await getTeams();
    const teamsResults = await Promise.all(teams.map(async t => ({
        name: t.name,
        laps: await getLapsForTeamId(t._id)
    })))
    return {
        swimmers: swimmersResults.filter(s => s.laps > 0).sort(sortLaps),
        teams: teamsResults.filter(t => t.laps > 0).sort(sortLaps)
    }
}

function sortLaps(a: {laps: number},b: {laps:number}) {
    return a.laps > b.laps ? -1 : 1;
}