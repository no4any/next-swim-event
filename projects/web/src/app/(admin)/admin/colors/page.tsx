import { auth } from "@/lib/auth/auth";
import { getCapColors } from "@/lib/mongo/collections"

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function CapColorPage() {
    const user = await auth();

    if(user === null) return <div>Fehlende Berechtigungen</div>;

    const colors = await getCapColors();

    return <div>
        <h1>Kappenfarben</h1>
        <div>{JSON.stringify(colors)}</div>
    </div>
}