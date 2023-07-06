import { Pool } from "pg";
import { env } from "@/dotenv";

export type Config = Readonly<{
    API_PORT:number,
    DOMAINE:string
}>;
export const config:Config = {
    API_PORT: env.API_PORT,
    DOMAINE: env.DOMAINE
};
export const pool = new Pool({
    host: env.PG_HOST,
    port: env.PG_PORT,
    database: env.PG_DATABASE,
    user: env.PG_USER,
    password: env.PG_PASS
});
