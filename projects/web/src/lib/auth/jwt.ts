import { JWT_SECRET } from '@/env';
import { User } from '../model';
import {sign, verify} from "jsonwebtoken"

export async function signUser(user: User) {
    return sign(User.parse(user), JWT_SECRET);
}

export async function verifyUser(token: string) {
    try {
        return User.parse(verify(token, JWT_SECRET));
    } catch (e) {
        console.warn(e);
        return null;
    }
}