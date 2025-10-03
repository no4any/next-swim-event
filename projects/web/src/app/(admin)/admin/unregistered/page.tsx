import { getSwimmers } from "@/lib/mongo/collections/swimmers/getSwimmers.function";
import SwimmerItem from "../swimmers/SwimmerItem.component";
import { getUnregisteredSwimmers } from "@/lib/mongo/collections/swimmers/getUnregisteredSwimmers.function";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function UnregisteredSwimmersPage() {
    const swimmers = await getUnregisteredSwimmers();

    return <div>
        <h1 className="mb-3">Ungemeledete Schwimmer</h1>
        <div>
            {swimmers.map((swimmer, i)=><SwimmerItem key={i} swimmer={swimmer}/>)}
        </div>
    </div>
}