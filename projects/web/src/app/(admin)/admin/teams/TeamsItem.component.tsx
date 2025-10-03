"use client"

import { Team } from "@/lib/model";
import Link from "next/link";

export default function TeamsItem({ team }: { team: Team }) {
    return <Link href={`/admin/teams/${team._id}`}>
        <div className="grid grid-cols-2 cursor-pointer hover:bg-gray-300">
            <div>{team.name}</div>
            <div>??? Strecke</div>
        </div>
    </Link>
}