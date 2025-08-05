"use server"

import { Swimmer, Team } from "@/lib/model";
import { addSwimmer } from "@/lib/mongo/collections";
import { deleteSwimmer } from "@/lib/mongo/collections/swimmers/deleteSwimmer.function";
import setTeamForSwimmer from "@/lib/mongo/collections/swimmers/setTeamForSwimmer.function";
import addTeam from "@/lib/mongo/collections/teams/addTeam.function";
import swimHash from "@/lib/swimHash.function";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function parseSwimmer(data: FormData): Promise<Swimmer> {
    const composedData: Swimmer = {
        isRegistered: false,
        isClosed: false,
        isManaged: false,
        firstName: data.get("firstName")?.toString() || "",
        lastName: data.get("lastName")?.toString() || "",
        email: data.get("email")?.toString().toLowerCase() || "",
        city: data.get("city")?.toString().length ? data.get("city")?.toString() : undefined,
        birthday: data.get("birthday")?.toString().length ? data.get("birthday")?.toString() : undefined,
        gender: (data.get("gender")?.toString() as "M" | "W" | "0") || "0",
        distanceRating: data.get("distanceRating")?.toString() !== "on",
        breakfast: data.get("breakfast")?.toString() === "on",
        allowsPublishingName: data.get("allowsPublishingName")?.toString() !== "on",
        newsletter: data.get("newsletter")?.toString() === "on",
        teamId: data.get("teamId")?.toString() || undefined
    }

    return Swimmer.parse(composedData);
}

async function parseTeam(data: FormData, owner: string): Promise<Team> {
    const teamname = data.get("teamname")?.toString() || "";

    const team: Team = {
        name: teamname,
        lowerName: teamname.toLowerCase(),
        owner
    }

    return Team.parse(team);
}

export default async function (initialState: {}, data: FormData): Promise<{ userError?: boolean, teamError?: boolean }> {
    let redirectPath = "";

    try {
        const swimmer = await parseSwimmer(data);
        const swimmerAddResult = await addSwimmer(swimmer);

        if (data.get("addTeam")?.toString() === "on") {
            try {
                const team = await parseTeam(data, swimmerAddResult.insertedId.toString());
                const teamResponse = await addTeam(team);

                await setTeamForSwimmer(swimmer._id || "", team._id)
            } catch (ee) {
                console.log(ee);
                await deleteSwimmer(swimmer._id || "");
                return { teamError: true }
            }
        }

        const swimmerId = swimmerAddResult.insertedId instanceof Object ? swimmerAddResult.insertedId.toString() : swimmerAddResult.insertedId;
        redirectPath = `/anmelden/${swimmerId}/${await swimHash(swimmerId)}`;
    } catch (e) {
        return { userError: true }
    }

    revalidatePath(redirectPath);
    redirect(redirectPath);
}