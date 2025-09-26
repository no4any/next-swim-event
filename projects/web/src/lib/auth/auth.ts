"use server";

import { cookies } from "next/headers";
import { cache } from "react";
import { signUser, verifyUser } from "./jwt";
import swimHash from "../swimHash.function";
import { getValidUser } from "../mongo/collections/users/getValidUser.function";
import { User, UserWithPassword } from "../model";
import { addUser, getUser } from "../mongo/collections";
import { DEFAULT_USER, DEFAULT_USER_PASSWORD } from "@/env";

const TOKEN_COOKIE_NAME = "user-token";

async function getTokenRaw() {
    const cookieStore = await cookies();
    return cookieStore.get(TOKEN_COOKIE_NAME)?.value ?? null;
}

const getToken = cache(getTokenRaw);

export async function auth() {
    try {
        const token = await getToken() || "";
        const tokenUser = await verifyUser(token);
        const user = getUser(tokenUser?.email || "");
        if(user !== null) return user; 
        return null;
    } catch(_e) {
        return null;
    }
}

export async function login(username: string, password: string) {
    const cookieStore = await cookies();
    const hashedPassword = await swimHash(password);

    const user = await getValidUser(username, hashedPassword);

    if (user !== null) {
        console.log(user);
        const jwt = await signUser(User.parse(user));
        cookieStore.set(TOKEN_COOKIE_NAME, jwt);
        return jwt;
    }

    if (username === DEFAULT_USER && password === DEFAULT_USER_PASSWORD) {
        const admin: UserWithPassword = {
            email: DEFAULT_USER,
            password: await swimHash(DEFAULT_USER_PASSWORD),
            isAdmin: true
        }

        await addUser(admin);

        const adminJwt = await signUser(User.parse(admin));
        cookieStore.set(TOKEN_COOKIE_NAME, adminJwt);

        return adminJwt;
    }

    return null;
}