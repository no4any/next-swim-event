"use client"

import { Swimmer } from "@/lib/model";
import removeSwimmerAction from "./removeSwimmerAction";
import Grid from "@/components/grid/Grid.component";
import Detail from "@/components/Detail.component";
import AddManagedSwimmerForm from "./AddManagedSwimmerForm.component";

export default function TeamManagement({ isLead, swimmers, teamId, id, hash }: { isLead: boolean, swimmers: Swimmer[], teamId: string, id: string, hash: string }) {
    async function remove(swimmerId: string) {
        if (confirm('Wirklich löschen?')) {
            await removeSwimmerAction(swimmerId, id, hash);
        }
    }

    if (!isLead) {
        return <></>
    }

    return isLead && <><h2 className="mt-4">Ihr Team</h2>
        {swimmers.map(swimmer => <div key={swimmer?._id?.toString() || ""} className="hover:bg-gray-100/30  rounded">
            <Grid>
                <div><Detail title="Name" value={`${swimmer.lastName}, ${swimmer.firstName}`} /></div>
                <div><Detail title="Geburtstag" value={swimmer.birthday} /></div>
                <div><Detail title="Optionen" value={<button onClick={() => remove(swimmer._id?.toString() || "")}>Entfernen</button>} /></div>
            </Grid>
        </div>)}
        <h2 className="my-4">Schwimmer hinzufügen</h2>
        <AddManagedSwimmerForm id={id} hash={hash} teamId={teamId} />
    </>
}