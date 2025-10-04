import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

export default async function PrintPage({ params }: { params: { name: string, title: string } }) {
    const user = await auth();

    if (user === null) redirect('/login');


    const { name, title } = await params;

    return <div className="print">
        <div className="page">
            <h1>Urkunde</h1>
            <h2>{decodeURIComponent(title)}</h2>
            <p className="for">für</p>
            <h4>{decodeURIComponent(name)}</h4>
            <p>beim 24 Stunden-Schwimmen der DLRG KG Gießen e.V. vom 04. bis 05. Oktober 2025 im Westbad Gießen</p>
        </div>
    </div>
}