import generateId from "@/lib/mongo/collections/counters/generateId.function";

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function testPage({params}:{params:Promise<{id: string}>}) {
    const {id} = await params;

    return <div>
        {await generateId(id)}
    </div>
}