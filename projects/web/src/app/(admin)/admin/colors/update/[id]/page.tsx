"use server"

import { auth } from "@/lib/auth/auth";
// import { getCapColor } from "@/lib/mongo/collections";
import { notFound } from "next/navigation";
import ChangeColorForm from "./ChangeColor.form";
import { getCapColor } from "@/lib/mongo/collections";

export default async function ChangeCapColorPage({ params }: { params: Promise<{ id: string }> }) {
    const user = await auth();

    if (user === null) return <div>Fehlende Berechtigungen</div>;

    const { id } = await params;
    const color = await getCapColor(id);

    if (color === null) notFound();

    return <div>
        <h1>Farbe ändern</h1>
        <ChangeColorForm capColor={color} id={id} />
    </div>
}