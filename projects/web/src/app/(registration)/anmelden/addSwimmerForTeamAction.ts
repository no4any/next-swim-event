"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { parseSwimmer } from "./addSwimmerAction";
import { addSwimmer } from "@/lib/mongo/collections";
import swimHash from "@/lib/swimHash.function";
import getTeam from "@/lib/mongo/collections/teams/getTeam.function";
import mail from "@/lib/mail/mail.function";
import htmlForRegistrationMail from "@/lib/mail/htmlForRegistrationMail.function";
import { DOMAIN } from "@/env";

export default async function addSwimmerForTeamAction(initialState: {}, data: FormData): Promise<{ userError?: boolean, teamError?: boolean }> {
    let teamPath = "";
    let redirectPath = "";

    try {
        const swimmer = await parseSwimmer(data);

        if (await getTeam(swimmer.teamId || "") === null) {
            teamPath = `/anmelden/${swimmer.teamId}`;
            return { teamError: true }
        }

        const swimmerAddResult = await addSwimmer(swimmer);

        const swimmerId = swimmerAddResult.insertedId instanceof Object ? swimmerAddResult.insertedId.toString() : swimmerAddResult.insertedId;
        redirectPath = `/anmelden/${swimmerId}/${await swimHash(swimmerId)}`;

        try {
            if (swimmer.email) {
                await mail(swimmer.email, htmlForRegistrationMail(`http://${DOMAIN}${redirectPath}`, `${swimmer.firstName} ${swimmer.lastName}`));
            }
        } catch (e) {
            console.error(e);
        }
    } catch (e) {
        console.error(e);
        return { userError: true }
    }

    revalidatePath(teamPath);
    revalidatePath(redirectPath);
    redirect(redirectPath);
}