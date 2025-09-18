import "server-only";

import { createHash } from "node:crypto";

const SALT = process.env.SALT || "SALT123";

export default async function swimHash(msg:string) {
    const saltedMsg = `${SALT}-${msg}`;
    
    return createHash("sha512").update(saltedMsg).digest("hex");
}