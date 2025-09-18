"use server"

import checkHash from "@/lib/checkHash.function";
import { Swimmer } from "@/lib/model";
import { addSwimmer } from "@/lib/mongo/collections/swimmers/addSwimmer.function";
import { getTeam } from "@/lib/mongo/collections/teams/getTeam.function";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getIdAndHash(formData: FormData) {
    return {
        id: formData.get("id")?.toString() || "",
        hash: formData.get("hash")?.toString() || ""
    }
}

async function parseSwimmer(data: FormData): Promise<Swimmer> {
    const composedData: Swimmer = {
        isRegistered: false,
        isClosed: false,
        isManaged: true,
        email: undefined,
        firstName: data.get("firstName")?.toString() || "",
        lastName: data.get("lastName")?.toString() || "",
        city: data.get("city")?.toString().length ? data.get("city")?.toString() : undefined,
        birthday: data.get("birthday")?.toString().length ? data.get("birthday")?.toString() : undefined,
        gender: (data.get("gender")?.toString() as "M" | "W" | "0") || "0",
        distanceRating: data.get("distanceRating")?.toString() !== "on",
        breakfast: data.get("breakfast")?.toString() === "on",
        allowsPublishingName: data.get("allowsPublishingName")?.toString() !== "on",
        newsletter: data.get("newsletter")?.toString() === "on",
        teamId: data.get("teamId")?.toString(),
        managerId: data.get("id")?.toString()
    }

    return Swimmer.parse(composedData);
}

export default async function addManagedSwimmerAction(_initialData: any, formData: FormData):Promise<{teamNotExistsError?: boolean, hashError?:boolean, swimmerError?:boolean}> {
    const { id, hash } = await getIdAndHash(formData);

    if (!checkHash(id, hash)) {
        return { hashError: true }
    }

    try {
        const swimmer = await parseSwimmer(formData);
        await addSwimmer(swimmer);
        const team = await getTeam(swimmer.teamId || "");

        if(team === null) {
            return {teamNotExistsError: true}
        }

    } catch (e) {
        console.error(e);
        return { swimmerError: true }
    }

    const path = `/anmelden/${id}/${hash}`;
    revalidatePath(path);
    redirect(path);
}