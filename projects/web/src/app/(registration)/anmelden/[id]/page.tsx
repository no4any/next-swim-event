import getTeam from "@/lib/mongo/collections/teams/getTeam.function";
import Register from "../Register";
import { notFound } from "next/navigation";

export default async function TeamRegisterPage({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;

    if(!await getTeam(id)) {
        notFound();
    }

    return <div>
        <Register team={id} />
    </div>
}