import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import { notFound } from "next/navigation";
import RegNrUpdateForm from "./RegNrUpdate.form";

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default async function UpdateCapPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const swimmer = await getSwimmer(id);

    if (swimmer === null) notFound();

    return <div>
        <h1>Registrienummer ändern</h1>
        <h2>{swimmer.lastName}, {swimmer.firstName}</h2>
        <RegNrUpdateForm id={id} regNum={swimmer.regNr || 0} />
    </div>
}