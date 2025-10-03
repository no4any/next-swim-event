"use client";

import { CapColor } from "@/lib/model/CapColor.model";
import { WithMongoId } from "@/lib/model/WithMongoId.model";
import Link from "next/link";
import deleteColorAction from "./deleteColor.action";

export default function ColorItem({ color }: { color: WithMongoId & CapColor }) {
    return <div className="grid grid-cols-2 gap-4 hover:bg-gray-300 h-12">
        <div style={{ color: color.color as string || "#000" }}>{color.name}</div>
        <div className="text-right">
            <span className="p-2 mt-2 mr-2 bg-dlrg-red rounded w-full font-bold cursor-pointer" onClick={() => {
                if (confirm(`${color.name} wirklich löschen?`)) deleteColorAction(color._id.toString()).then(alert)
            }}>Löschen</span>
            <Link className="p-2 mt-2 mr-2 bg-dlrg-blue rounded w-full font-bold cursor-pointer" href={`/admin/colors/update/${color._id}`}>Ändern</Link>
        </div>
    </div>
}