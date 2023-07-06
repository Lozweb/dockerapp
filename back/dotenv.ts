import { load } from "ts-dotenv";

export const env = load({
  SALT_KEY: String,
  PG_HOST: String,
  PG_DATABASE: String,
  PG_USER: String,
  PG_PASS: String,
  PG_PORT: Number,
  API_PORT: Number,
  DOMAINE: String
});
