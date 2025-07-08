import fs from "fs";

import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { DB_PATH } from "./params";

const INIT_SQL = fs.readFileSync(`${__dirname}/sql/init.sql`).toString();

(async () => {
    const db = await open({
        filename: DB_PATH,
        driver: sqlite3.Database,
        mode: sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE
    })
    
    db.exec(INIT_SQL);
})();