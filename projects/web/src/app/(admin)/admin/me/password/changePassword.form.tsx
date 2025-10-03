"use client"

import SubmitButton from "@/components/backend/input/SubmitButton.component";
import { useState } from "react"
import ChangePasswordAction from "./changePassword.action";
import InputPassword from "@/components/backend/input/InputPassword.component";

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
        <InputPassword title="Altes Passwort" type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
        <InputPassword title="Neues Passwort" type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
        <InputPassword title="Neues Passwort zu bestätigung" type="password" value={newPasswordRepeat} onChange={e => setNewPasswordRepeat(e.target.value)} />
        <SubmitButton>Ändern</SubmitButton>
    </form>
}