"use client";

import InputCheckbox from "@/components/backend/input/InputCheckbox.component";
import InputText from "@/components/backend/input/InputText.component";
import SubmitButton from "@/components/backend/input/SubmitButton.component";
import { useState } from "react";
import createUserAction from "./createUser.action";

export default function CreateUserForm() {
    const [email, setEmail] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [password, setPassword] = useState("");

    return <form onSubmit={e => {
        e.preventDefault();
        createUserAction(email, password, isAdmin)
            .then(alert)
            .catch(console.error);
    }}>
        <InputText title="E-Mail" value={email} onChange={e => setEmail(e.target.value)} />
        <InputText title="Passwort" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <InputCheckbox checked={isAdmin} onChange={e => setIsAdmin(e.target.checked)}>Administrator?</InputCheckbox>
        <SubmitButton>Hinzufügen</SubmitButton>
    </form>
}