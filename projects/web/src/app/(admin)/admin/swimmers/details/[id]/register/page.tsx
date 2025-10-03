import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import { notFound } from "next/navigation";
import RegisterSwimmerForm from "./RegisterSwimmer.form";
import { getCapColors } from "@/lib/mongo/collections";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function RegisterPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const swimmer = await getSwimmer(id);
    const capColors = await getCapColors();

    if (swimmer === null) notFound();

    return <div>
        <h1>Swimmer anmelden</h1>
        <h2>{swimmer.lastName}, {swimmer.firstName}</h2>
        <h3>Kassieren: <span className="font-bold underline">{12 + (swimmer.breakfast ? 6 : 0)}€</span></h3>
        <div>
            <RegisterSwimmerForm swimmer={swimmer} capColors={capColors} />
        </div>
    </div>
}