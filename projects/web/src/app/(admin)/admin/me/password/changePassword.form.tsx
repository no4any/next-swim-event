"use client"

import InputText from "@/components/backend/input/InputText.component";
import SubmitButton from "@/components/backend/input/SubmitButton.component";
import { useState } from "react"
import ChangePasswordAction from "./changePassword.action";

export default function ChangePasswordForm() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordRepeat, setNewPasswordRepeat] = useState("");

    return <form onSubmit={e => {
        e.preventDefault();
        ChangePasswordAction(oldPassword, newPassword, newPasswordRepeat)
            .then(alert)
            .catch(console.log)
    }}>
        <InputText title="Altes Passwort" type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
        <InputText title="Neues Passwort" type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
        <InputText title="Neues Passwort zu bestätigung" type="password" value={newPasswordRepeat} onChange={e => setNewPasswordRepeat(e.target.value)} />
        <SubmitButton>Ändern</SubmitButton>
    </form>
}