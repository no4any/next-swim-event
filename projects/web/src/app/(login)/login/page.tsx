import { signUser, verifyUser } from "@/lib/auth/jwt"
import { User } from "@/lib/model"
import LoginForm from "./login.form"

export default async function LoginPage() {
    return <div>
        <h1>LoginPage</h1>
        <LoginForm />
    </div>
}