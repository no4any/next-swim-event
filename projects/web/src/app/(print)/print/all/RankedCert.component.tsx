import { Swimmer } from "@/lib/model";

export default async function RankedCert({ title, swimmer, rank }: { title: string, rank: number, swimmer: Swimmer }) {
    return <div className="page">
        <h1>Urkunde</h1>
        <h2>{title}</h2>
        <h3>{rank}. Platz</h3>
        <p className="for">für</p>
        <h4>{swimmer.firstName} {swimmer.lastName}</h4>
        <p>beim 24 Stunden-Schwimmen der DLRG KG Gießen e.V. vom 04. bis 05. Oktober 2025 im Westbad Gießen</p>
    </div>
}