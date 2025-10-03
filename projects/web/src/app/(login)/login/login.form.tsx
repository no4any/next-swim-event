"use client"

import InputText from "@/components/backend/input/InputText.component";
import SubmitButton from "@/components/backend/input/SubmitButton.component";
import { useState } from "react";
import LoginAction from "./login.action";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <form onSubmit={(e) => {
        e.preventDefault();
        LoginAction(email, password).catch(()=>alert("Fehler beim Anmelden"));
    }}>
        <InputText title="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputText title="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <SubmitButton>Anmelden</SubmitButton>
    </form>
}