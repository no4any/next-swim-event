import { auth } from "@/lib/auth/auth"
import getAge from "@/lib/getAge";
import { getLap } from "@/lib/mongo/collections/laps/getLap.function";
import { getLapsForSwimmerId } from "@/lib/mongo/collections/laps/getLapsForSwimmerId.function";
import { getSwimmer } from "@/lib/mongo/collections/swimmers/getSwimmer.function";
import youthMedal from "@/lib/youthMedal";
import { notFound } from "next/navigation";

export default async function ChildrenCert({ params }: { params: Promise<{ id: string }> }) {
    const user = await auth();
    if (user === null) notFound();

    const { id } = await params;

    const swimmer = await getSwimmer(id)
    if (swimmer === null) notFound();
    if (swimmer.birthday === undefined) notFound();

    const laps = await getLapsForSwimmerId(id);
    const distance = laps * 50;
    const birthday = new Date(swimmer.birthday);

    const medal = youthMedal(distance, birthday);
    if (medal === null) notFound();

    return <div className="print">
        <div className="page">
            <h1>Urkunde</h1>
            <h2>{swimmer.firstName} {swimmer.lastName}</h2>
            <p>ist beim 24 Stunden-Schwimmen der DLRG KG Gießen e.V. vom 04. bis 05. Oktober 2025 im Westbad Gießen</p>
            <h3>{distance} m</h3>
            <p>geschwommen und hat damit in der Altersklasse {getAge(birthday)}</p>
            <h3>{medal}</h3>
            <p>erreicht.</p>
        </div>
    </div>
}