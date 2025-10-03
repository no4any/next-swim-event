import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import { notFound } from "next/navigation";
import SwimmerUpdateForm from "./SwimmerUpdateForm.component";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function SwimmerUpdatePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const swimmer = await getSwimmer(id);

    if (swimmer === null) notFound();

    return <div>
        <SwimmerUpdateForm id={id} swimmer={swimmer} />
    </div>
}