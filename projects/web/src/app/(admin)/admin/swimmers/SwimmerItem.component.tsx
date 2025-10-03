import getAge from "@/lib/getAge";
import { Swimmer } from "@/lib/model";
import { WithMongoId } from "@/lib/model/WithMongoId.model";
import { getCapColor } from "@/lib/mongo/collections";
import Link from "next/link";

export default async function SwimmerItem({ swimmer }: { swimmer: Swimmer & WithMongoId }) {
    return <Link href={`/admin/swimmers/details/${swimmer._id}`}>
        <div className="grid grid-cols-7 hover:bg-gray-300">
            <div className={`col-span-2 ${swimmer.isManaged && "italic"} ${swimmer.isRegistered && "font-bold"}`}>{swimmer.lastName}, {swimmer.firstName}</div>
            <div>{swimmer.capColor && <Cap capColor={swimmer.capColor} capNr={swimmer.capNr || 0}/>}</div>
            <div>{swimmer.gender !== "0" && swimmer.gender}</div>
            <div>{swimmer.birthday && (getAge(new Date(swimmer.birthday)) + " Jahre")}</div>
            <div>{swimmer.city}</div>
            <div>{swimmer.breakfast && "Frühstück"}</div>
        </div>
    </Link>
}

async function Cap({ capColor, capNr }: { capColor: string, capNr: number }) {
    const color = await getCapColor(capColor);
    return <span style={{color: color?.color as string || '#000000'}}>{color?.name || "???"} {capNr}</span>
}