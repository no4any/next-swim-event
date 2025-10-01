import { getSwimmers } from "@/lib/mongo/collections/swimmers/getSwimmers.function";
import SwimmerItem from "./SwimmerItem.component";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function SwimmersPage() {
    const swimmers = await getSwimmers();

    return <div>
        <h1 className="mb-3">Schwimmer</h1>
        <div>
            {swimmers.map((swimmer, i)=><SwimmerItem key={i} swimmer={swimmer}/>)}
        </div>
    </div>
}