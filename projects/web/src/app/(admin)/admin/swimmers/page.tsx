import { getSwimmers } from "@/lib/mongo/collections/swimmers/getSwimmers.function";

export default async function SwimmersPage() {
    const swimmers = await getSwimmers();

    return <div>
        {JSON.stringify(swimmers)}
    </div>
}