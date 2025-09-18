import "server-only";

import swimHash from "./swimHash.function";

export default async function checkHash(id: string, hash: string) {
    return hash === await swimHash(id);
}