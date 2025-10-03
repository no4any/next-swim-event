import { getCapColors } from "@/lib/mongo/collections";
import FindSwimmerForm from "../FindSwimmer.form";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function LogNightPage() {
    const colors = await getCapColors();

    return <div>
        <h1 className="mb-3">Nacht Loggen</h1>
        <FindSwimmerForm night={true} colors={colors}/>
    </div>
}