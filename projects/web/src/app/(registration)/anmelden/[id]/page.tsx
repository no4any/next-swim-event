import getTeam from "@/lib/mongo/collections/teams/getTeam.function";
import Register from "../Register";
import { notFound } from "next/navigation";
import EventHeader from "../EventHeader.component";

export default async function TeamRegisterPage({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const team = await getTeam(id);;

    if(!team) {
        notFound();
    }

    return <div>
        <EventHeader team={team} />
        <Register team={id} />
    </div>
}