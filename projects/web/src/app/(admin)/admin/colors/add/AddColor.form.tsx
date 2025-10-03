"use client"

import { CapColor } from "@/lib/model/CapColor.model"
import { useState } from "react"
import ColorForm from "../Color.form"
import { addColorAction } from "./addColor.action"

export default function AddColorForm() {
    const [color, setColor] = useState<CapColor>({ name: "", color: "#ffffff" })

    return <ColorForm capColor={color} onChange={setColor} onSubmit={() => addColorAction(color).then(alert)} />;
}