import express, {Request, Response} from "express";
import cors from "cors";
import compression from "compression";
import * as https from "https";
import * as fs from "fs";
import * as path from "path";
import { readFileSync } from "fs";
import {config, pool} from "@/config";

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

app.post("/install", async (req:Request, res:Response) => {
    try{
        const table_install = fs.readFileSync(path.join(__dirname, "../script/table.sql")).toString();
        console.log(table_install)
        await pool.query(table_install);
        return res.status(200).json({message: "table install success!"})
    } catch (e) {
        return res.status(500).json({message: `error : ${e}`})
    }
})

app.get("/", (req:Request, res:Response) => {
    return res.status(200).json({message: "i'm working !"})
})

app.post("/add", async (req:Request, res:Response) => {
    console.log("call /add")
    try {
        console.log(req.body)
        const elem = req.body.message as {message: string};
        if(elem){
            const q = "INSERT INTO docker (title) VALUES ($1)";
            const insr = await pool.query(q, [elem])
            if(insr.rowCount > 0) return res.status(200).json({message: "elem insert !"})
            else return res.status(400).json({messaage: "Bad request ?"})
        } else {
            return res.status(400).json({message: "body is empty !"})
        }
    }catch (e){
        return res.status(500).json({message: `error : ${e}`})
    }
})
https.createServer(options, app).listen(config.API_PORT, () => {
    console.log(`Le serveur démarre sur le port ${config.API_PORT}`);
});
