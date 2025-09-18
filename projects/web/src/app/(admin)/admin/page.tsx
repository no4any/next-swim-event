import generateKeyPair from "@/lib/auth/generateKeyPair.function";
import jwt from "jsonwebtoken";

export default async function DashboardPage() {
    const { privateKey, publicKey } = generateKeyPair();
    const token = jwt.sign({ msg: "Dummy" }, privateKey, { algorithm: "RS256", expiresIn: "1d" });
    const decoded = jwt.verify(token, publicKey, { algorithms: ["RS256"] });

    return <div>
        <h1>Dashboard</h1>
        <div className="my-4">Private {privateKey}</div>
        <div className="my-4">Public {publicKey}</div>
        <div>Token {token}</div>
        <div>Decoded {JSON.stringify(decoded)}</div>
    </div>
}