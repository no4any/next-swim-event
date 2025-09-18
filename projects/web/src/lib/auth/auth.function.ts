import "server-only";

import jwt from "jsonwebtoken";
import generateKeyPair from "./generateKeyPair.function";
import { User } from "../model";

const { privateKey, publicKey } = generateKeyPair();

export async function sign(user: User) {
    return jwt.sign(user, privateKey, { algorithm: 'RS256', expiresIn: '1d' });
}

export async function verify(token: string) {
    return User.parseAsync(jwt.verify(token, publicKey, { algorithms: ['RS256'] }));
}