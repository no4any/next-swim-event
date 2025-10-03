import Link from "next/link";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function LogPage() {
    return <div>
        <h1>Bahnen erfassen</h1>
        <div className="my-5">
            <Link className="p-2 mt-2 mr-2 bg-dlrg-blue rounded w-full font-bold cursor-pointer" href="/admin/log/day">Reguläre</Link>
        </div><div>
            <Link className="p-2 mt-2 mr-2 bg-dlrg-red rounded w-full font-bold cursor-pointer" href="/admin/log/night">Nachpokal</Link>
        </div>
    </div>
}