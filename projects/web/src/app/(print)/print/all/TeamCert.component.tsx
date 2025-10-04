import { Team } from "@/lib/model";

export default function TeamCert({ title, team, rank }: { rank: number, title: string, team: Team }) {
    return <div className="page">
        <h1>Urkunde</h1>
        <h2>{title}</h2>
        <h3>{rank}. Platz</h3>
        <p className="for">für das Team</p>
        <h4>{team.name}</h4>
        <p>beim 24 Stunden-Schwimmen der DLRG KG Gießen e.V. vom 04. bis 05. Oktober 2025 im Westbad Gießen</p>
    </div>
}