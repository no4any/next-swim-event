PRAGMA foreign_keys=on;

BEGIN TRANSACTION;

CREATE TABLE user (
    mail VARCHAR(512) PRIMARY KEY,
    password VARCHAR(512) NOT NULL,
    roll VARCHAR(512)
);

CREATE TABLE cap_color (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    color_code TEXT NOT NULL
);

CREATE TABLE swimmer (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    firstname TEXT NOT NULL,
    gender VARCHAR(1) NOT NULL,
    status TEXT NOT NULL,
    mail TEXT UNIQUE,
    city TEXT,
    birthday TEXT,
    breakfast BOOLEAN,
    distance_rating BOOLEAN,
    publish_name BOOLEAN,
    newsletter BOOLEAN,
    cap_nr INTEGER,
    cap_color INTEGER,
    reg_nr INTEGER,
    FOREIGN KEY (cap_color) REFERENCES cap_color (id)
);

CREATE TABLE team(
    id INTEGER PRIMARY KEY,
    lower_name VARCHAR(512) UNIQUE,
    name TEXT NOT NULL,
    owner INTEGER NOT NULL,
    FOREIGN KEY (owner) REFERENCES swimmer (id)
);

ALTER TABLE swimmer ADD COLUMN team INTEGER REFERENCES team(id);

CREATE TABLE swimmer_comment (
    id INTEGER PRIMARY KEY,
    comment TEXT NOT NULL,
    swimmer_id INTEGER NOT NULL,
    creator VARCHAR(512) NOT NULL,
    FOREIGN KEY (creator) REFERENCES user (mail),
    FOREIGN KEY (swimmer_id) REFERENCES swimmer (id)
);

CREATE TABLE distance(
    id INTEGER PRIMARY KEY,
    distance INTEGER,
    creator VARCHAR(512) NOT NULL,
    FOREIGN KEY (creator) REFERENCES user (mail)
);

COMMIT;