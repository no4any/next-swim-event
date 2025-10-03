"use client"

import InputColor from "@/components/backend/input/InputColor.component"
import InputText from "@/components/backend/input/InputText.component"
import SubmitButton from "@/components/backend/input/SubmitButton.component"
import { CapColor } from "@/lib/model/CapColor.model"
import { useEffect, useState } from "react"

export interface CapColorFormProps {
    capColor: CapColor,
    onChange: (capColor: CapColor) => void
    onSubmit: () => void
}

export default function ColorForm({ capColor, onSubmit, onChange }: CapColorFormProps) {
    const [name, setName] = useState(capColor.name)
    const [color, setColor] = useState(capColor.color)

    useEffect(()=>{
        onChange({name, color});
    }, [name, color])

    return <form onSubmit={e => {
        e.preventDefault(),
        onSubmit();
    }}>
        <InputText title="Name der Farbe" value={name} onChange={e => setName(e.target.value)} />
        <InputColor title="Farbwert" value={color as string} onChange={e => setColor(e.target.value)} />
        <SubmitButton>Erstellen</SubmitButton>
    </form>
}