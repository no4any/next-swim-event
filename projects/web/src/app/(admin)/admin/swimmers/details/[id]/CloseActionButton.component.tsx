"use client"

import closeAction from "./close.action"

export default function CloseActionButton({ id, value }: { id: string, value: boolean }) {
    return <span className="cursor-pointer" onClick={() => closeAction(id, !value).then(alert)}>{value ? "Reaktivieren" : "Schließen"}</span>
}