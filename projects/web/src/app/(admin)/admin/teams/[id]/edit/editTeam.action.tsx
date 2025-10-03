"use server"

import updateTeamName from "@/lib/mongo/collections/teams/updateTeamName.function"
import { redirect } from "next/navigation";


export default async function editTeamAction(id: string, name: string) {
    await updateTeamName(id, name);
    redirect(`/admin/teams/${id}`);
}