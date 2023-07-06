import express, {Request, Response} from "express";
import cors from "cors";
import compression from "compression";
import * as https from "https";
import { readFileSync } from "fs";
import { config } from "@/config";

const app = express();

const options = {
    key: readFileSync(`/etc/letsencrypt/live/${config.DOMAINE}/localhost.key`,"utf-8"),
    cert: readFileSync(`/etc/letsencrypt/live/${config.DOMAINE}/localhost.crt`,"utf-8")
};

const corsOption: cors.CorsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    preflightContinue: false,
    allowedHeaders: ["Content-Type", "Authorization", "Content-Security-Policy"]
};

app.use(cors(corsOption));
app.use(compression());

app.use(express.json());

app.get("/", (req:Request, res:Response) => {
    console.log("receive call on /")
    res.send({message : "I working!"})
})
https.createServer(options, app).listen(config.API_PORT, () => {
    console.log(`Le serveur démarre sur le port ${config.API_PORT}`);
});
