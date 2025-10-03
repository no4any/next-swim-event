"use client"

import closeAction from "./close.action"

export default function CloseActionButton({ id, value }: { id: string, value: boolean }) {
    return <span className="p-2 mt-2 mr-2 bg-dlrg-red rounded w-full font-bold cursor-pointer" onClick={() => closeAction(id, !value).then(alert)}>{value ? "Reaktivieren" : "Schließen"}</span>
}