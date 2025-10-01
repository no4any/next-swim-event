"use client"

import getAge from "@/lib/getAge";
import { Swimmer } from "@/lib/model";
import { WithMongoId } from "@/lib/model/WithMongoId.model";
import Link from "next/link";

export default function SwimmerItem({ swimmer }: { swimmer: Swimmer & WithMongoId }) {
    return <Link href={`/admin/swimmers/details/${swimmer._id}`}>
        <div className="flex flex-row cursor-pointer hover:bg-gray-300">
            <div className={`basis-1/5 ${swimmer.isManaged && "italic"}`}>{swimmer.lastName}, {swimmer.firstName}</div>
            <div className="basis-1/5">{swimmer.gender !== "0" && swimmer.gender}</div>
            <div className="basis-1/5">{swimmer.birthday && (getAge(new Date(swimmer.birthday)) + " Jahre")}</div>
            <div className="basis-1/5">{swimmer.city}</div>
            <div className="basis-1/5">{swimmer.breakfast && "Frühstück"}</div>
        </div>
    </Link>
}