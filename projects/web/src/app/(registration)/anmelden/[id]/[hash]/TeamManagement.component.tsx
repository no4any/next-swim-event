"use client"

import { Swimmer } from "@/lib/model";
import removeSwimmerAction from "./removeSwimmerAction";
import Grid from "@/components/grid/Grid.component";
import Detail from "@/components/Detail.component";
import AddManagedSwimmerForm from "./AddManagedSwimmerForm.component";
import SmallButton from "@/components/input/SmallButton.component";
import dateToString from "@/lib/dateToString.function";
import { useRouter } from "next/navigation";

export default function TeamManagement({ isLead, swimmers, teamId, id, hash }: { isLead: boolean, swimmers: Swimmer[], teamId: string, id: string, hash: string }) {
    const router = useRouter();

    async function remove(swimmer: Swimmer) {
        if (confirm(`${swimmer.firstName} ${swimmer.lastName} wirklich löschen?`)) {
            await removeSwimmerAction(swimmer._id?.toString() || "", id, hash);
        }
    }

    if (!isLead) {
        return <></>
    }

    return isLead && <><h2 className="mt-4">Ihr Team</h2>
        {swimmers.map(swimmer => <div key={swimmer?._id?.toString() || ""} className="hover:bg-gray-100/30 py-3 rounded">
            <Grid>
                <div><Detail title="Name" value={`${swimmer.lastName}, ${swimmer.firstName}`} /></div>
                <div><Detail title="Geburtstag" value={swimmer.birthday && dateToString(new Date(swimmer.birthday))} /></div>
                <div><Detail title="Optionen" value={<>
                    {swimmer.isManaged && !swimmer.isRegistered && <SmallButton className="mr-4" color="RED" onClick={() => remove(swimmer)}>Entfernen</SmallButton>}
                    {swimmer.isManaged && <SmallButton color="GREEN" onClick={()=>router.push(`/anmelden/${id}/${hash}/${swimmer._id?.toString() || ""}`)}>Details</SmallButton>}
                </>} /></div>
            </Grid>
        </div>)}
        <h2 className="my-4">Schwimmer zum Team hinzufügen</h2>
        <AddManagedSwimmerForm id={id} hash={hash} teamId={teamId} />
    </>
}