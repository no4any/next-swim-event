"use client";

import { CapColor } from "@/lib/model/CapColor.model";
import { WithMongoId } from "@/lib/model/WithMongoId.model";
import Link from "next/link";


export default function ColorItem({ color }: { color: WithMongoId & CapColor }) {
    return <div className="flex flex-row">
        <div style={{ color: color.color as string || "#000" }} className={`w-1/2`}>{color.name}</div>
        <div className="w-1/2 text-right">
            <span className="cursor-pointer mr-3" >Löschen</span>
            <Link href={`/admin/colors/update/${color._id}`}>Ändern</Link>
        </div>
    </div>
}