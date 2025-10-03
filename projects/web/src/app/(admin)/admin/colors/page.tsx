import { auth } from "@/lib/auth/auth";
import { getCapColors } from "@/lib/mongo/collections"
import ColorItem from "./ColorItem.component";
import Link from "next/link";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function CapColorPage() {
    const user = await auth();

    if (user === null) return <div>Fehlende Berechtigungen</div>;

    const colors = await getCapColors();

    return <div>
        <h1 className="mb-3">Kappenfarben</h1>
        <div className="mb-3">
            <Link className="p-2 mt-2 mr-2 bg-dlrg-blue rounded w-full font-bold cursor-pointer" href="/admin/colors/add">Kappenfarbe hinzufügen</Link>
        </div>
        <div>
            {colors.map((color, i) => <ColorItem key={i} color={color} />)}
        </div>
    </div>
}