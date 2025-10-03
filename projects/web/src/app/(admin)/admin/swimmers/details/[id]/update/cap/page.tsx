import { auth } from "@/lib/auth/auth";
import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import { notFound } from "next/navigation";
import CapUpdateForm from "./CapUpdate.form";
import { getCapColors } from "@/lib/mongo/collections";

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default async function UpdateCapPage({ params }: { params: Promise<{ id: string }> }) {
    const {id} = await params;

    const swimmer = await getSwimmer(id);
    
    if(swimmer === null) notFound();

    const capColors = await getCapColors();

    return <div>
        <h1>Badekappe ändern</h1>
        <h2>{swimmer.lastName}, {swimmer.firstName}</h2>
        <CapUpdateForm capColors={capColors} id={swimmer._id.toString()} capNum={swimmer.capNr || 0} capColorId={swimmer.capColor || ""}/>
    </div>
}