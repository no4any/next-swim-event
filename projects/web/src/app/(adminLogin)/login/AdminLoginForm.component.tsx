"use client"

import Input from "@/components/input/Input.component"
import SubmitButton from "@/components/input/SubmitButton.component";
import { Credentials } from "@/lib/model/Credentials.model";
import { useState, useTransition } from "react";
import loginAction from "./loginAction.function";
import ErrorBlock from "@/components/ErrorBlock.component";

export default function AdminLoginForm() {
    const [credentials, setCredentials] = useState<Credentials>({ username: "", password: "" });
    const [error, setError] = useState<{ error?: boolean }>({});
    const [isPending, startTransition] = useTransition();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function login() {
        startTransition(async () => {
            console.log(credentials)
            setError(await loginAction(credentials));
        })
    }

    return <form onSubmit={e => { e.preventDefault(); login(); }}>
        <div className="mt-2 mx-auto p-5 bg-white/30 backdrop-blur-2xl rounded-xl">
            <h2 className="mb-4">Admin Login</h2>
            {error?.error && <ErrorBlock>Anmelden informationen falsch</ErrorBlock>}
            <Input disabled={isPending} name="username" onChange={handleChange} type="text" title="Benutzername" />
            <Input disabled={isPending} name="password" onChange={handleChange} type="password" title="Passwort" />
            <SubmitButton disabled={isPending}>Anmelden</SubmitButton>
        </div>
    </form>
}