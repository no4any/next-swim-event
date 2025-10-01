"use client"

import { CapColor } from "@/lib/model/CapColor.model"
import { useState } from "react"
import ColorForm from "../../Color.form"
import changeColorAction from "./changeColor.action"

export default function ChangeColorForm({ capColor, id }: { capColor: CapColor, id: string }) {
    const [color, setColor] = useState<CapColor>(capColor)

    return <ColorForm capColor={color} onChange={setColor} onSubmit={() => { changeColorAction(id, color).then(alert) }} />;
}