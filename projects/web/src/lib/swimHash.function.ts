import { SALT } from "@/env";
import { createHash } from "node:crypto";

export default async function swimHash(msg:string) {
    const saltedMsg = `${SALT}-${msg}`;
    
    return createHash("sha512").update(saltedMsg).digest("hex");
}