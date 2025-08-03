import swimHash from "@/lib/swimHash.function";
import { notFound } from "next/navigation";

async function checkHash(id: string, hash: string) {
    return hash === await swimHash(id);
}

export default async function SwimmerPage({ params }: { params: Promise<{ id: string, hash: string }> }) {
    const { id, hash } = await params;

    if(!await checkHash(id, hash)) {
        console.log("Hash Failed!")
        notFound();
    }

    const link = `https://dlrg-giessen.de/anmelden/${id}`;

    return <div>
        <h1>Ihre Daten</h1>
        <div className="italic">Auf dieser Seite werden in Kürze Ihre anmeldeinformationen Abrufbar sein. Außerdem werden Sie hier in Kürze Teammitglider pflegen können, die über keine E-Mail verfügen.</div>
        <div className="font-bold">Teammitglieder die sich selbstständig anmelden können, können sich über folgenden Link registrien:</div>
        <div><a href={link}>{link}</a></div>
    </div>
}