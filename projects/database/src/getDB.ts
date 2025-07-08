import { open } from "sqlite";
import { DB_PATH } from "./params";
import sqlite3 from "sqlite3";

export async function getDB() {
    return await open({
        filename: DB_PATH,
        driver: sqlite3.cached.Database,
        mode: sqlite3.OPEN_READWRITE
    })
}