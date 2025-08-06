"use server"

import { Team } from "@/lib/model";

export default async function EventHeader({ team }: { team?: Team }) {
    return <header className="mb-4">
        <h1 className="mb-4">
            Anmeldung
            <small className="ms-2 font-semibold text-dlrg-black-100">
                zum 24 Stunden Schwimmen 2025
            </small>
        </h1>
        <div>
            <p>Mit diesem Formular melden Sie sich unverbindlich zur 24 Stunden Schwimmer 2025 an. Nach erfolgreicher Anmeldung erhalten Sie eine E-Mail mit Ihren Zugangsdaten. Behandeln Sie den enthaltenen Link vertraulich.</p>
            <p className="mt-4">Vor Ort beträgt die Startgebühr 7 &euro;. Außerdem beträgt der Pfand für eine Badekappe 5 &euro;. Es erleichtert uns die Rückgabe, wenn Sie das Pfand passend als 5 &euro; mitbringen können. <b>An der Veranstaltung sind ausschließlich Barzahlungen möglich.</b></p>
            {team ? <p className="mt-4">
                <p>Sie melden sich mit dieser Anmeldung für folgendes Team an: <b className="font-bold">{team.name}</b></p>
            </p> : <p className="mt-4">
                Sollten Sie ein Team angemeldet haben. Können Sie Ihr Team über den per E-Mail erhaltenen Link verwalten. Dort lassen sich auch Teammitglieder pflegen, welche über keine eigene E-Mail-Adresse verfügen.
            </p>}
        </div>
    </header>
}