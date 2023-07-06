CREATE TABLE IF NOT EXISTS docker
(
    id          SERIAL          PRIMARY KEY NOT NULL UNIQUE,
    title       VARCHAR(250)    NOT NULL
)